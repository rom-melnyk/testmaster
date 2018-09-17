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

testCasesRouter.get('/:id', (req, res) => {
  TestCase.findById(req.params.id).then((testCase) => {
    if (testCase) {
      res.send(testCase);
    } else {
      sendError(res, 'Not found');
    }
  }).catch((e) => {
    sendError(res, 'DB error', e);
  });
});

testCasesRouter.post('/', (req, res) => {
  TestCase.create(req.body).then((result) => {
    res.send(result.toJSON());
  }).catch((e) => {
    sendError(res, 'DB error', e);
  });
});

testCasesRouter.put('/:id', (req, res) => {
  TestCase.update(req.body, { where: { id: req.params.id } })
    .then(([ updated ]) => {
      res.send({ updated });
    }).catch((e) => {
      sendError(res, 'DB error', e);
    });
});

testCasesRouter.delete('/:id', (req, res) => {
  TestCase.destroy({ where: { id: req.params.id } })
    .then((deleted) => {
      res.send({ deleted });
    }).catch((e) => {
      sendError(res, 'DB error', e);
    });
});

export { testCasesRouter };
