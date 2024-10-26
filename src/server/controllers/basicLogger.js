export const basicLogger = (req, _, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method}\t${req.path}`);
  // console.log(`${req.get('User-Agent')}\n`);
  next();
};
