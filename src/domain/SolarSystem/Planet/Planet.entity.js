export class Planet {
  #properties;

  constructor() {
    this.#properties = {
      name: '',
      mass: 0,
      radius: 0,
      orbit: {
        period: 0,
        eccentricity: 0,
        inclination: 90,
      },
    };
  };

  static create() {

  };
};
