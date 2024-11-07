/**
 * @module Mass
 * 
 * Represents a scalar mass value with a specified unit of measure.
 *
 * @param {number} value - The mass value to be represented.
 * @param {('mass_e'|'mass_j')} [unit='mass_e'] - The unit of the mass value, either 'mass_e' for electron mass or 'mass_j' for Jupiter mass.
 * @throws {TypeError} If the value is not a number or the unit is not a string.
 * @throws {RangeError} If the value is negative or the unit is not one of the valid units.
 * @returns {Object} An object representing the mass with methods for conversion.
 * @returns {number} return.value - The original mass value.
 * @returns {string} return.unit - The unit of the mass value.
 * @returns {Function} return.convert - A method to convert the mass to another unit.
*/

export const Mass = (value, unit = 'mass_e') => {
  const validMassUnits = ['mass_e', 'mass_j'];

  function validateValue() {
    if (isNaN(value))
      throw new TypeError('value must be a number');
    if (value < 0)
      throw new RangeError('value must be a non-negative number');  
  };

  function validateUnit(newUnit) {
    if (typeof(newUnit) !== 'string')
      throw new TypeError('value must be a string');
    if (!validMassUnits.includes(newUnit))
      throw new RangeError(`unit must be one of ${validMassUnits.join(', ')} `);  
  };

  function convert(newUnit) {
    /* mass_e is 1 because it is the default for the unit parameter */
    const massConversions = {
      mass_e: 1,
      mass_j: 317.83,
    };

    const newValue = (value * massConversions[unit]) / massConversions[newUnit];

    return Mass(newValue, newUnit);
  };

  validateValue();
  validateUnit(unit);
  
  return Object.freeze({
    value,
    unit,
    convert,
  });
};
