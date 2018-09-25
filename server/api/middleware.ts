import * as express from 'express';
import { Paths } from '../../shared/constants';

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

      console.log(`[http] ${req.method} ${req.originalUrl}`, message && `"${message}"` || '', debug);
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
        res.sendError(err, 'Unable to send back "index.html"');
      }
    });
  };
}
