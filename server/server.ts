import * as http from 'http';
import * as https from 'https';
import * as path from 'path';

import * as forceSsl from 'express-force-ssl';

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
// import fileUpload from 'express-fileupload';

import httpsOptions from './https-cert/index';
// import { assignTestCasesApi } from './api/test-cases';

import { sequelize } from './db';

const app = express();

const staticPath = path.resolve(__dirname, '../client-compiled');
const staticConfig = express.static(staticPath);
app.use(staticConfig);

app.use(forceSsl);
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(fileUpload({
//     limits: { fileSize: 50 * 1024 * 1024 }
// }));
// app.use(userMiddleware);

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
