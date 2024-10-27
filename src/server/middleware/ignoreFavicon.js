export const ignoreFavicon = (_, res) => {
  res.status(404).send('Wut?  404 - Not Found\n');
};
