import dotenv from 'dotenv';

export const loadEnvironmentVariables = new Promise(resolve => {
  console.clear();
  dotenv.config();
  console.log(` Environment Variables Loaded -- NODE_ENV=${process.env.NODE_ENV} \n`);
  resolve(dotenv.config());
});
