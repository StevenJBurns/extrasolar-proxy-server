import dotenv from 'dotenv';

export const loadEnvironmentVariables = () => {
  dotenv.config();
  console.log(` Environment Variables Loaded -- NODE_ENV=${process.env.NODE_ENV} \n`);
};
