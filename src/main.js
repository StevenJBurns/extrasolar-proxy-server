import { loadEnvironmentVariables } from './loadEnvironmentVariables.js';
import { createServer } from './createServer.js';

(function() {
  console.clear();

  loadEnvironmentVariables();

  createServer()
    .listen(
      process.env.SERVER_PORT,
      () => {
        console.log(` Server running on port ${process.env.SERVER_PORT}\n`)
      }
    );
})();
