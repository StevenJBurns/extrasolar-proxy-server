export const ignoreFavicon = (router) => {
  router.use('*', (_req, res) => res.status(404).send('Wut?  404 - Not Found\n'));
};

