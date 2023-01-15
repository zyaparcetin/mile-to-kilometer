const milesToKilometers = require('./')

describe('milesToKilometers', function() {
  it('should convert miles to kilometers', function() {
    expect(milesToKilometers(1)).to.be(1.609)
    expect(milesToKilometers(0)).to.be(0)
  })
  it('should throw an error if miles is not a number', function() {
    expect(milesToKilometers.bind(null, 'a')).to.throw('miles must be a number')
  })
})
