import express, { Router } from 'express';
import cors from 'cors';
import { fetchNasaData } from './fetchNasaData.js';
import { fetchStars } from './fetchStars.js';
import { fetchPlanets } from './fetchPlanets.js';

export const createServer = () => new Promise(resolve => {
  const server = express();
  const router = Router();

  server.disable('x-powered-by');  
  server.set('port', process.env.SERVER_PORT ?? 4000);

  server.use([express.json(), express.urlencoded({ extended: false })]);

  server.use(cors({
  origin: [
    // 'http://localhost:5500',
    // 'http://127.0.0.1:5500',
    'http://localhost:4096',
    'http://127.0.0.1:4096',
    'https://stevenjburns.github.io'
  ]
}));

  // router.get('/get', async (req, res, next) => {
  //   const data = await fetchNasaData();
  //   res.json(data);
  //   next();
  // });

  router.get('/stars', fetchStars);
  router.get('/planets', fetchPlanets);

  server.use(router);
  resolve(server);
});