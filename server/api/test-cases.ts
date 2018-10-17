import * as express from 'express';
import { TestCase } from '../db/models/test-case.model';
import { testCaseAttachmentsRouter } from './test-case-attachments';
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
  TestCase.create(req.body).then((result) => {
    res.send(result.toJSON());
  }).catch((e) => {
    res.sendError(e, 'DB error');
  });
});

testCasesRouter.put('/:id', (req: express.Request, res: express.Response) => {
  TestCase.update(req.body, { where: { id: req.params.id } })
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

testCasesRouter.use(
  '/:id/attachments',
  (req: express.Request, res: express.Response, next: () => any) => {
    req.testCaseId = req.params.id;
    next();
  },
  testCaseAttachmentsRouter
);

function formatTestCase(testCase: Sequelize.Model) {
  const formatted = testCase.toJSON();
  const attachments = formatted.attachment || [];
  return Object.assign(formatted, { attachments });
}

export { testCasesRouter };
