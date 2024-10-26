import axios from 'axios';

const urlDistinctSolarSystems = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,sy_pnum+from+ps&format=json';

export async function fetchSolarSystems(_, res, next) {
  const data = await axios.get(urlDistinctSolarSystems)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      next();
    });
  
  res.status(200).send(`found ${data.length} solar systems\n`);
};
