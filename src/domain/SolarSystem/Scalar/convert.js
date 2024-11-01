function convert(scalar) {
  /* mass_e is 1 because it is the default for the unit parameter */
  const conversions = {
    mass: {
      mass_e: 1,
      mass_j: 317.83,
      },
      distance: {
        AU: 1,
        lightYear: 1,
        kilometers: 1,
        radius_e: 1,
        radius_j: 1,
      },
      temperature : {
        C: 1,
        K: 1,
      }
  };

  const newValue = (value * massConversions[unit]) / massConversions[newUnit];

  return Mass(newValue, newUnit);
};