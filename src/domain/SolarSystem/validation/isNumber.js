import { Valid, Invalid } from "."; 

export const isNumber = (value) => {
  return typeof value === 'number' && !isNaN(value)
    ? Valid(value)
    : Invalid('Value must be a valid number.');
};
