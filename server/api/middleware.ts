import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { Paths } from '../../shared/constants';

const { app: { attachmentsDir } } = require('../config.json');

const fileExists = promisify(fs.access);

export function resSendError() {
  return (req: express.Request, res: express.Response, next: () => any) => {
    res.sendError = (debug: any, message?: string) => {
      let statusCode = 500;
      if (debug) {
        if (debug.code === 'ENOENT') {
          statusCode = 404;
        } else {
          const codeFromError = debug.status || debug.statusCode;
          if (codeFromError) {
            statusCode = codeFromError;
          }
        }
      }

      res.status(statusCode).send({
        error: true,
        debug,
        message,
      });
    };
    next();
  };
}

export function getAvailablePaths() {
  return Object.values(Paths)
    .reduce((paths, _path) => {
      const newPaths = typeof _path === 'string'
        ? [_path]
        : Object.values(_path);
      return paths.concat(newPaths);
    }, [])
    .map(_path => `/${_path}`);
}

export function sendIndexHtml(staticPath: string) {
  return (req: express.Request, res: express.Response) => {
    res.sendFile('index.html', { root: staticPath }, (err) => {
      if (err) {
        console.error(err);
        res.sendError(err, 'Unable to send back "index.html"');
      }
    });
  };
}

export function getAttachment() {
  return (req: express.Request, res: express.Response) => {
    const filepath = path.resolve(attachmentsDir, req.params.filename);
    fileExists(filepath, fs.constants.F_OK)
      .then(() => {
        res.sendFile(req.params.filename, { root: attachmentsDir }, (err) => {
          if (err) {
            return Promise.reject(err);
          }
        });
      })
      .catch((err) => {
        console.error(err);
        res.sendError(err, `Failed to send "${req.params.filename}"`);
      });
  };
}
