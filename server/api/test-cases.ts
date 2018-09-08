import * as express from 'express';
import { TestCase } from '../db/models/test-case.model';
import { sendError } from './api-helpers';

/**
 * @api-base /api/test-cases
 */
const testCasesRouter = express.Router();

testCasesRouter.get('/', (req, res) => {
  TestCase.findAll().then((testCases) => {
    res.send(testCases);
  }).catch((e) => {
    sendError(res, 'DB error', e);
  });
});

export { testCasesRouter };
