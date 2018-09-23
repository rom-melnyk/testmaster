import * as express from 'express';
import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';

const { app: { attachmentsDir } } = require('../config.json');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);
const chmod = promisify(fs.chmod);
const rmdir = promisify(fs.rmdir);

/**
 * @api-base /api/test-cases/:id/attachments
 */
const testCaseAttachmentsRouter = express.Router();

interface StatObject {
  name: string;
  isDir?: boolean;
  size?: number;
  date?: number | Date;
}

testCaseAttachmentsRouter.get('/', (req: express.Request, res: express.Response) => {
  const testCasePrefix = `${req.testCaseId}_`;
  readdir(attachmentsDir)
    .then((filenames) => {
      const promises: Promise<StatObject>[] = filenames
        .filter(fileName => fileName.slice(0, testCasePrefix.length) === testCasePrefix)
        .map((name) => stat(path.join(attachmentsDir, name))
          .then((statObj) => ({
            name,
            isDir: !!(statObj.mode & 0b100000000000000), // tslint:disable-line no-bitwise
            size: statObj.size,
            date: statObj.birthtime
          }) as StatObject)
          .catch((err) => ({ name } as StatObject))
        );
      return Promise.all(promises);
    })
    .then((files: StatObject[]) => {
      const strippedList = files
        .filter(({ isDir }) => !isDir)
        .map((_stat) => {
          delete _stat.isDir;
          return _stat;
        });
      res.send(strippedList);
    })
    .catch((err) => {
      res.sendError(err, 'Failed to get attachments list');
    });
});

testCaseAttachmentsRouter.post('/', (req: express.Request, res: express.Response) => {
  const testCaseId = req.testCaseId;
  // TODO
});

export { testCaseAttachmentsRouter };
