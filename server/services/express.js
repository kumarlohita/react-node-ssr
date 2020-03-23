import path from 'path'
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler as queryErrorHandler } from 'querymen';
import { errorHandler as bodyErrorHandler } from 'bodymen';

export default routes => {
  const app = express();

  app.use(cors())

  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(routes);
  app.use(queryErrorHandler());
  app.use(bodyErrorHandler());
  app.use(express.static(path.resolve(__dirname, '../..', 'build')))

  return app;
};
