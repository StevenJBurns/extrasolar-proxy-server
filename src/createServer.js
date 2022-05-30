import express, { Router } from 'express';
import cors from 'cors';
import { getNasaData } from './getNasaData.js';

export const createServer = () => new Promise(resolve => {
  const server = express();
  const router = Router();

  server.disable('x-powered-by');  
  server.set('port', process.env.SERVER_PORT ?? 4000);

  server.use([express.json(), express.urlencoded({ extended: false })]);
  server.use(cors({ origin: '*' }));

  router.get('/get', async (req, res, next) => {
    await getNasaData();
    res.json(['data']);
    next();
  });

  server.use(router);

  resolve(server);
});