import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const { app: { attachmentsDir } } = require('../config.json');

const fileExists = promisify(fs.access);
const unlink = promisify(fs.unlink);

/**
 * @api-base /attachments/:filename
 */
const singleAttachmentRouter = express.Router();

singleAttachmentRouter.get('/:filename', (req: express.Request, res: express.Response) => {
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

singleAttachmentRouter.delete('/:filename', (req: express.Request, res: express.Response) => {
  const filename = path.resolve(attachmentsDir, req.params.filename);
  unlink(filename)
    .then(() => {
      res.send({ deleted: 1 });
    }).catch((err) => {
      res.sendError(err, `Failed to delete "${req.params.filename}"`);
    });
});

export { singleAttachmentRouter };
