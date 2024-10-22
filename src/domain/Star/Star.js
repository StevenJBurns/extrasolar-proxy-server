// import { StarParameters } from "./StarParameters";

/* mass and radius are relative to the Sun */
export class Star {
  #id;
  #mass;
  #radius;
  #temperature;

  constructor(args) {
    this.#id = args.id;
    this.#mass = args.mass;
    this.#radius = args.radius;
    this.#temperature = args.temperature;
  };

  get id() {
    return this.#id;
  };

  get mass() {
    return this.#mass;
  };

  get radius() {
    return this.#radius;
  };

  get temperature() {
    return this.#temperature;
  };
};
