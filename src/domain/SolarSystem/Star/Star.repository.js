import { Star } from './Star.entity.js';

const StarRepository = (dataSource) => {
  this.dataSource = dataSource;
  this.list = [];
};

StarRepository.prototype.add = function(newStar) {
  return [...this.list, newStar];
};

StarRepository.prototype.getAll = function() {
  return this.list;
};

StarRepository.prototype.getByHostname = function(starHostname) {
  const solarSystem = this.list.find(star => star.hostname === starHostname);
  return solarSystem;
};

StarRepository.prototype.update = function(hostname, ) {
  const solarSystem = this.list.find(solarSystem => solarSystem.hostname === hostname);
};

StarRepository.prototype.remove = function(starId) {

};

export default StarRepository;
