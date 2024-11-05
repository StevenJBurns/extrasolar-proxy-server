import { Valid, Invalid } from "."; 

export const isPositive = (value) => {
  return value > 0 ? Valid(value) : Invalid('Value must be positive.');
};