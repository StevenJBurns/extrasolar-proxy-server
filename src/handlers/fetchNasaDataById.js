export async function fetchNasaDataById() {
  url = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+hostname+=+'${hostName}'&format=json`;

  console.log(`${new Date().toISOString()} - fetching NASA data`);
  
  const data = await axios.get(urlDistinctSolarSystems)
    .then(res => res.data)
    .catch(err => console.log(err));
  
  return data;
};