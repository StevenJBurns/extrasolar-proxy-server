import axios from 'axios';

const urlDistinctSolarSystems = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,sy_pnum+from+ps&format=json';

export async function fetchSolarSystems(_req, res) {
  const data = await axios.get(urlDistinctSolarSystems)
    .then(res => res.data)
    .catch(err => console.error(err));
  
  res.status(200).send(`found ${data.length} solar systems\n`);
};
