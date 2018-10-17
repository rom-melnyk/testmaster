import * as express from 'express';
import { TestCase } from '../db/models/test-case.model';
import { Sequelize } from 'sequelize';

/**
 * @api-base /api/test-cases
 */
const testCasesRouter = express.Router();

testCasesRouter.get('/', (req: express.Request, res: express.Response) => {
  TestCase.findAll().then((testCases: Sequelize.Model[]) => {
    const formattedTestCases = testCases.map(formatTestCase);
    res.send(formattedTestCases);
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.get('/:id', (req: express.Request, res: express.Response) => {
  TestCase.findById(req.params.id).then((testCase: Sequelize.Model) => {
    if (testCase) {
      res.send(formatTestCase(testCase));
    } else {
      return res.sendError({ status: 404 }, 'Not found');
    }
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.post('/', (req: express.Request, res: express.Response) => {
  const testCase = Object.assign({}, req.body);
  testCase.attachments = testCase.attachments || [];

  TestCase.create(testCase).then((result) => {
    res.send(formatTestCase(result));
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.put('/:id', (req: express.Request, res: express.Response) => {
  const testCase = Object.assign({}, req.body);
  if (testCase.attachments !== undefined && !testCase.attachments) {
    testCase.attachments = [];
  }

  TestCase.update(testCase, { where: { id: req.params.id } })
    .then(([ updated ]) => {
      res.send({ updated });
    }).catch((e) => {
      res.sendError(e, 'DB error');
    });
});

testCasesRouter.delete('/:id', (req: express.Request, res: express.Response) => {
  TestCase.destroy({ where: { id: req.params.id } })
    .then((deleted) => {
      res.send({ deleted });
    }).catch((e) => {
      res.sendError(e, 'DB error');
    });
  // TODO remove attachments
});

function formatTestCase(testCase: Sequelize.Model) {
  const formatted = testCase.toJSON();
  const attachments = formatted.attachments || [];
  return Object.assign(formatted, { attachments });
}

export { testCasesRouter };
