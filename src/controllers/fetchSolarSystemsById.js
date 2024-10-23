import axios from "axios";

export async function fetchSolarSystemsById(req, res) {
  const { hostname } = req.params;
  
  if (!hostname) res.status(400).send('bad request');
    
  const urlSolarSystemById = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+hostname+=+'${hostname ?? ''}'&format=json`;

  const data = axios.get(urlSolarSystemById)    
    .then(res => res.data)
    .catch(err => console.log(err))
  
  if (data.length > 1) res.status(500).send('error: duplicate solar systems found');

  res.status(200).send(`hostname: ${ hostname }\n`);
};