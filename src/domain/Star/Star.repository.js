import { Star } from './Star.entity.js';

export const starRepository = () => {
  const list = [];

  const add = (newStar) => {
    list = [...list, newStar];
  };

  const get = (starId) => {
    const system = list.find(star => star.id === starId);
    return system ?? {};
  };

  const remove = (starId) => {

  };

  return list;
};
