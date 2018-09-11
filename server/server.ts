import * as http from 'http';
import * as https from 'https';
import * as path from 'path';

import * as forceSsl from 'express-force-ssl';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

import httpsOptions from './https-cert/index';
import { Paths } from '../shared/constants';

import { testCasesRouter } from './api/test-cases';
// import { testSuitesRouter } from './api/test-suites';
// import { testPlansRouter } from './api/test-plans';
// import { regressionCyclesRouter } from './api/regression-cycles';

import { sequelize } from './db';

const app = express();

app.use(forceSsl);
app.use(cookieParser());
app.use(bodyParser.json());

const staticPath = path.resolve(__dirname, '../client-compiled');
const staticConfig = express.static(staticPath);
app.use(staticConfig);

const availablePaths = Object.values(Paths)
  .reduce((paths, path) => {
    const newPaths = typeof path === 'string'
      ? [path]
      : Object.values(path);
    return paths.concat(newPaths);
  }, [])
  .map(path => `/${path}`);

app.use(`/api/${Paths.TestCases.ALL}`, testCasesRouter);
// app.use(`/api/${Paths.TestSuites.ALL}`, testSuitesRouter);
// app.use(`/api/${Paths.TestPlans.ALL}`, testPlansRouter);
// app.use(`/api/${Paths.RegressionCycles.ALL}`, regressionCyclesRouter);

app.get(availablePaths, (req, res) => {
  res.sendFile('index.html', { root: staticPath }, (err) => {
    if (err) {
      console.error(err);
    }
    res.end();
  });
});

app.all(/.*/, (req, res) => {
  res.redirect(`/${Paths.NOT_FOUND}`);
});

const logMsg = '[http/s] TestMaster server listening on ';

sequelize
  .authenticate()
  .then(() => {
    console.log('[db] Connection has been established successfully.');
  })
  .catch((e) => {
    console.error('Unable to connect to the database:', e);
  });

http.createServer(app).listen(80, () => console.log(logMsg + 80));
https.createServer(httpsOptions, app).listen(443, () => console.log(logMsg + 443));
