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

// const StarRepository = (dataSource) => {
//   this.dataSource = dataSource;
//   this.list = [];
// };

// StarRepository.prototype.add = function(newStar) {
//   return [...this.list, newStar];
// };

// StarRepository.prototype.getAll = function() {
//   return this.list;
// };

// StarRepository.prototype.getByHostname = function(starHostname) {
//   const solarSystem = this.list.find(star => star.hostname === starHostname);
//   return solarSystem;
// };

// StarRepository.prototype.update = function(hostname, ) {
//   const solarSystem = this.list.find(solarSystem => solarSystem.hostname === hostname);
// };

// StarRepository.prototype.remove = function(starId) {

// };

// export default StarRepository;
