import axios from 'axios';

export const fetchPlanets = async (req, res, next) => {
  console.log(`${new Date().toISOString()} - fetching PLANET data`);
  const urlPlanets = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,pl_letter,hostname+from+ps+order+by+pl_name&format=json';
  const data = await axios.get(urlPlanets)
    .then(res => res.data)
    .catch(err => console.log(err));

  res.send(data);
};
