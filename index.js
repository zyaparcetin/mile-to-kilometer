/* function milesToKilometers(miles) {
  if (typeof miles !== 'number') {
    throw new Error('miles must be a number!');
  } else {return miles * 1.609}
  } */

//const milesToKilometers = (miles) => typeof miles !== 'number' ? throw new Error('miles must be a number!') : miles * 1.609;
//function milesToKilometers(miles) {typeof miles !== 'number' ? throw new Error('miles must be a number!') : return miles * 1.609}

const milesToKilometers = (miles) => {if (typeof miles !== 'number') {throw new Error('miles must be a number!')} return miles * 1.609}

console.log(milesToKilometers(5))

module.exports = milesToKilometers
