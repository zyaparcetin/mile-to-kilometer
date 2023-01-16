const milesToKilometers = require('./')

describe('milesToKilometers', () => {
  it('should convert miles to kilometers', () => {
    expect(milesToKilometers(2)).toBe(3.218);
  })
  it('should throw an error if miles is not a number', () => {
    expect(() => {
      milesToKilometers('2')
    }).toThrow('miles must be a number!')
  })
})
