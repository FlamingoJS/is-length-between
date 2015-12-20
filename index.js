const isMin = require('is-min');
const isMax = require('is-max');

module.exports = function isBetween(string, minLength, maxLength) {
  const stringLenght = string.length;

  if (minLength === undefined) {
    minLength = 0;
  }

  if (maxLength === undefined) {
    maxLength = Infinity;
  }

  return (stringLenght >= minLength && stringLenght <= maxLength);
};
