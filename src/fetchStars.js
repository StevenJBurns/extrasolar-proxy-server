import axios from 'axios';

export const fetchStars = async (_req, res, next) => {
  console.log(`${new Date().toISOString()} - fetching STAR data`);
  const urlStars = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,sy_pnum+from+ps+order+by+hostname&format=json';
  
  const data = await axios.get(urlStars)
    .then(res => res.data)
    .catch(err => {
      console.error(err);
      next();
    })

  res.send(data);
};
