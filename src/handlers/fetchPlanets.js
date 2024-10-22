import axios from 'axios';

export async function fetchPlanets (req, res, next) {
  console.log(`${new Date().toISOString()} - fetching PLANET data`);
  
  const urlPlanets = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+pl_name,pl_letter,hostname+from+ps+order+by+pl_name&format=json';
  
  const data = await axios.get(urlPlanets)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
      next();
    });

  res.status(200).send(data);
};
