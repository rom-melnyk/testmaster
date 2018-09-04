import * as express from 'express';

/**
 * @api-base /api/test-cases
 */
const testCasesRouter = express.Router();

testCasesRouter.get('/', (req, res) => {
  res.send([
    { id: 1, title: 'A pretty bug', description: 'Some pretty descr' },
    { id: 2, title: 'Another pretty bug', description: 'Another pretty descr' },
    { id: 3, title: 'An ugly bug', description: 'Some ugly descr' },
    { id: 4, title: 'A nice bug', description: 'Some nide descr' },
  ]);
});

export { testCasesRouter };
