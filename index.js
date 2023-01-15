function milesToKilometers(miles) {
  if (typeof miles !== 'number') {
    throw new Error('miles must be a number');
  } else {return miles * 1.609}
  }

  module.exports = milesToKilometers
