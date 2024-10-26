import axios from "axios";

export async function fetchSolarSystemsById(req, res, next) {
  const { hostname } = req.params;
      
  const urlSolarSystemById = `https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+ps+where+hostname+=+'${hostname ?? ''}'&format=json`;

  const data = await axios.get(urlSolarSystemById)    
    .then(res => res.data)
    .catch(err => console.log(err))
  
  // if (data.length > 1) res.status(500).send('error: duplicate solar systems found');
  if (!data.length) return next();
  
  res.header("Content-Type",'application/json');
  res.status(200).send(`${JSON.stringify(data, null, 2)}\n`);
};