import cors from 'cors';
import express from 'express';
import { createRouter } from './routes/router.js';

export const createServer = () => {
  const server = createRouter(express());

  server.set('port', process.env.SERVER_PORT ?? 3000);
  server.use([express.json(), express.urlencoded({ extended: false })]);

  server.use(cors({
    origin: [
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

  server.disable('x-powered-by');

  return server;
};