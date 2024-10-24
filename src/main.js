import { loadEnvironmentVariables } from './server/loadEnvironmentVariables.js';
import { createServer } from './server/createServer.js';

function main() {
  console.clear();

  loadEnvironmentVariables();

  createServer()
    .listen(
      process.env.SERVER_PORT,
      () => {
        console.log(` Server running on port ${process.env.SERVER_PORT}\n`)
      }
    );
};

main();
