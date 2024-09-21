import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import env from './utils/env.js';

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

  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
  });

  app.listen(port, () => console.log(`Server runing on port ${port}`));
};

export default startServer;