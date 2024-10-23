export function healthHandler(_req, res) {
  res.status(200).send('Health Check : Good\n');
};
