import * as express from 'express';

export function sendError(res: express.Response, message: string, debug?: any) {
  res.status(500).send({
    error: true,
    message,
    debug
  });
}
