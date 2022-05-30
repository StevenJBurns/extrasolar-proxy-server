import { loadEnvironmentVariables } from './loadEnvironmentVariables.js';
import { createServer } from './createServer.js';

loadEnvironmentVariables
  .then(createServer)
  .then(server => server.listen(process.env.SERVER_PORT))
  .then(() => console.log(` Server running on port ${process.env.SERVER_PORT}\n`))
  .catch(err => console.error(err));
