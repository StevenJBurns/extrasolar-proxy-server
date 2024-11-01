export const composeAsync = (...fns) => (x) =>
  fns.reduceRight((acc, fn) => acc.then(fn), Promise.resolve(x));
