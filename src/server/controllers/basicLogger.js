export const basicLogger = (req, _res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method}\t${req.path}`);
  console.log(`${req.get('User-Agent')}\n`);
  next();
};
