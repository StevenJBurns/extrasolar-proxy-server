import { Router } from "express";
import * as Handlers from "../handlers/index.js";

export const createRouter = () => {
  const router = new Router();
  const { fetchNasaData, fetchNasaDataById, fetchStars, fetchPlanets, healthHandler } = Handlers;

  router.get('/solar-systems', fetchNasaData);
  router.get('/solar-systems:id', fetchNasaDataById);
  router.get('/stars', fetchStars);
  router.get('/planets', fetchPlanets);
  router.get('/health', healthHandler );

  return router;
};
