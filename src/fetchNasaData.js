import axios from 'axios';

const urlDistinctSystems = 'https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+distinct+hostname,sy_snum,sy_pnum+from+ps&format=json';

export const fetchNasaData = async () => {
  console.log(`${new Date().toISOString()} - fetching NASA data`);
  const data = await axios.get(urlDistinctSystems)
    .then(res => res.data)
    .catch(err => console.log(err));
  
  return data;
};
