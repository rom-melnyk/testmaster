import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const { app: { attachmentsDir } } = require('../config.json');

const fileExists = promisify(fs.access);
const unlink = promisify(fs.unlink);

/**
 * @api-base /api/attachments
 */
const attachmentsRouter = express.Router();

attachmentsRouter.get('/:filename', (req: express.Request, res: express.Response) => {
  const filepath = path.join(attachmentsDir, req.params.filename);
  fileExists(filepath, fs.constants.F_OK)
    .then(() => {
      res.sendFile(req.params.filename, { root: attachmentsDir }, (err) => {
        if (err) {
          return Promise.reject(err);
        }
      });
    })
    .catch((err) => {
      res.sendError(err, `Failed to send "${req.params.filename}"`);
    });
});

attachmentsRouter.delete('/:filename', (req: express.Request, res: express.Response) => {
  const filename = path.resolve(attachmentsDir, req.params.filename);
  unlink(filename)
    .then(() => {
      res.send({ deleted: 1 });
    }).catch((err) => {
      res.sendError(err, `Failed to delete "${req.params.filename}"`);
    });
});

interface UploadResult {
  uploaded?: string;
  failed?: string;
}

attachmentsRouter.post('/', (req: express.Request, res: express.Response) => {
  if (!req.files) {
    return res.sendError({ status: 400 }, 'No file was uploaded');
  }

  const promises = Object.values(req.files)
    .map((fileObj: any): Promise<UploadResult> => {
      const filename = getSafeName(fileObj.name);
      return fileObj.mv(path.join(attachmentsDir, filename))
        .then((err) => {
          return err ? Promise.reject(err) : { uploaded: filename };
        })
        .catch((err) => {
          console.log(`[api/attachments] Failed uploading "${fileObj.name}"`, err);
          return { failed: filename };
        });
    });

  Promise.all(promises)
    .then((results: UploadResult[] ) => {
      const combinedResults = results.reduce((accum: { failed: string[], uploaded: string[] }, resultObj: UploadResult) => {
        const key = Object.keys(resultObj)[0] as keyof UploadResult;
        accum[key].push(resultObj[key]);
        return accum;
      }, { failed: [], uploaded: [] });
      res.send(combinedResults);
    })
    .catch((err) => {
      res.sendError(err, `Failed to upload files`);
    });
});

const UNSAFE_SYMBOLS = /['"`:# \(\)\/\\\?]/g;

function getSafeName(originalName: string): string {
  const { name, ext } = path.parse(originalName);
  return name.replace(UNSAFE_SYMBOLS, '_')
    + '_' + Date.now().toString(16).toLowerCase() // 11 chars
    + ext;
}

export { attachmentsRouter };
