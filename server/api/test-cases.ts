import * as express from 'express';
import { TestCase } from '../db/models/test-case.model';

/**
 * @api-base /api/test-cases
 */
const testCasesRouter = express.Router();

testCasesRouter.get('/', (req, res) => {
  TestCase.findAll().then((testCases) => {
    res.send(testCases);
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.get('/:id', (req, res) => {
  TestCase.findById(req.params.id).then((testCase) => {
    if (testCase) {
      res.send(testCase);
    } else {
      return res.sendError({ status: 404 }, 'Not found');
    }
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.post('/', (req, res) => {
  TestCase.create(req.body).then((result) => {
    res.send(result.toJSON());
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.put('/:id', (req, res) => {
  TestCase.update(req.body, { where: { id: req.params.id } })
    .then(([ updated ]) => {
      res.send({ updated });
    }).catch((e) => {
      res.sendError(e, 'DB error');
    });
});

testCasesRouter.delete('/:id', (req, res) => {
  TestCase.destroy({ where: { id: req.params.id } })
    .then((deleted) => {
      res.send({ deleted });
    }).catch((e) => {
      res.sendError(e, 'DB error');
    });
});

export { testCasesRouter };
