import * as http from 'http';
import * as path from 'path';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

const { app: APP_CONFIG } = require('./config.json');
import { Paths } from '../shared/constants';

import { testCasesRouter } from './api/test-cases';
// import { testSuitesRouter } from './api/test-suites';
// import { testPlansRouter } from './api/test-plans';
// import { regressionCyclesRouter } from './api/regression-cycles';

import { sequelize } from './db';

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());

const staticPath = path.resolve(__dirname, '../client-compiled');
const staticConfig = express.static(staticPath);
app.use(staticConfig);

const availablePaths = Object.values(Paths)
  .reduce((paths, _path) => {
    const newPaths = typeof _path === 'string'
      ? [_path]
      : Object.values(_path);
    return paths.concat(newPaths);
  }, [])
  .map(_path => `/${_path}`);

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

const logMsg = '[http] TestMaster server listening on :';

sequelize
  .authenticate()
  .then(() => {
    console.log('[db] Connection has been established successfully.');
  })
  .catch((e) => {
    console.error('[db] Unable to connect:', e);
  });

http.createServer(app).listen(APP_CONFIG.port, () => console.log(logMsg + APP_CONFIG.port));
