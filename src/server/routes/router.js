import { Router } from "express";
import * as Controllers from "../controllers/index.js";

export const createRouter = (server) => {
  const router = new Router();

  const {
    basicLogger,
    fetchSolarSystems,
    fetchSolarSystemsById,
    fetchStars,
    fetchPlanets,
    healthHandler
  } = Controllers;

  router.use(basicLogger);
  router.get('/solar-systems', fetchSolarSystems);
  router.get('/solar-systems/:hostname', fetchSolarSystemsById);
  router.get('/stars', fetchStars);
  router.get('/planets', fetchPlanets);
  router.get('/health', healthHandler );

  router.get('/favicon.ico', (_req, res) => res.status(204).send());

  router.use('*', (_req, res) => res.status(404).send('Wut?  404 - Not Found\n'));

  return server.use(router);
};
