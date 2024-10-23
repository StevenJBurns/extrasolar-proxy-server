import { SolarSystem } from './SolarSystem.entity.js';

export const solarSystemRepository = () => {
  const list = [];

  const add = (newSolarSystem) => {
    list = [...list, newSolarSystem];
  };

  const get = (solarSystemId) => {
    const system = list.find(system => system.id === solarSystemId);
    return system ?? {};
  };

  const remove = () => {

  };

  return list;
};
