module.exports = milesToKilometers

function milesToKilometers(miles) {
  if (typeof miles !== 'number') {
    throw new Error('miles must be a number!');
  } return miles * 1.609
} 
