import * as http from 'http';
import * as path from 'path';

import { sequelize } from './db';

import { Paths } from '../shared/constants';
const { app: { port: appPort } } = require('./config.json');

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as fileUpload from 'express-fileupload';

import { resSendError, getAvailablePaths, sendIndexHtml, } from './api/middleware';
import { singleAttachmentRouter } from './api/single-attachment';
import { testCasesRouter } from './api/test-cases';
// import { testSuitesRouter } from './api/test-suites';
// import { testPlansRouter } from './api/test-plans';
// import { regressionCyclesRouter } from './api/regression-cycles';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }
}));
app.use(resSendError());

const staticPath = path.join(__dirname, '../client-compiled');
app.use(express.static(staticPath));

app.use(`/attachments`, singleAttachmentRouter);

app.use(`/api/${Paths.TestCases.ALL}`, testCasesRouter);
// app.use(`/api/${Paths.TestSuites.ALL}`, testSuitesRouter);
// app.use(`/api/${Paths.TestPlans.ALL}`, testPlansRouter);
// app.use(`/api/${Paths.RegressionCycles.ALL}`, regressionCyclesRouter);

const availablePaths = getAvailablePaths();
app.get(availablePaths, sendIndexHtml(staticPath));

app.all(/.*/, (req, res) => {
  res.redirect(`/${Paths.NOT_FOUND}`);
});

const logMsg = '[http] TestMaster server listening on :';

sequelize
  .authenticate()
  .then(() => {
    console.log('[db] Connection has been established successfully.');
  })
  .catch((e) => {
    console.error('[db] Unable to connect:', e);
  });

http.createServer(app).listen(appPort, () => console.log(logMsg + appPort));
