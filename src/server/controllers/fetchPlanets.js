import axios from 'axios';

export async function fetchPlanets (_, res, next) {
  const urlPlanets = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,pl_letter,hostname+from+ps+order+by+pl_name&format=json';
  
  const data = await axios.get(urlPlanets)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      next();
    });

  res.status(200).send(`found ${data.length} planets`);
};
