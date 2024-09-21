import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import eventRouters from './routers/eventsRouters.js';
import env from './utils/env.js';
import { notFoundHandler, errorHandler } from './middleware/errorHandlers.js';

const startServer = () => {
  dotenv.config();
  const app = express();
  const port = Number(env('PORT'));

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(cors());
  app.use(eventRouters);
  app.use('*', notFoundHandler);
  app.use(errorHandler);

  app.listen(port, () => console.log(`Server runing on port ${port}`));
};

export default startServer;
