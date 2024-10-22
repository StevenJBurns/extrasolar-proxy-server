import cors from 'cors';
import express from 'express';
import { createRouter } from './routes/router.js';
// import { fetchNasaData } from './fetchNasaData.js';
import { fetchStars } from './handlers/fetchStars.js';
import { fetchPlanets } from './handlers/fetchPlanets.js';

export const createServer = () => {
  const server = express();
  const router = createRouter();

  router.get('/stars', fetchStars);

  router.get('/planets', fetchPlanets);

  router.get('/health', (_req, res) => {
    res.status(200).send('Health ChecK : Good\n');
  });

  // router.get('/get', async (req, res, next) => {
  //   const data = await fetchNasaData();
  //   res.json(data);
  //   next();
  // });

  router.use('*', (_req, res) => res.status(404).send('Wut?  404 - Not Found'));

  server.set('port', process.env.SERVER_PORT ?? 3000).disable('x-powered-by');
  server.use([express.json(), express.urlencoded({ extended: false })]);

  server.use(cors({
    origin: [
      // 'http://localhost:5500',
      // 'http://127.0.0.1:5500',
      'http://localhost:4096',
      'http://127.0.0.1:4096',
      'https://stevenjburns.github.io'
    ],
    methods: [
      'OPTIONS',
      'HEAD',
      'GET',
    ],
  }));

  server.use(router);

  return server;
};