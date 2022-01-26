const Candy = require('./Candy')

describe('Candy', () => {
  it('returns a name', () => {
    const candy = new Candy('Mars');
    expect(candy.getName()).toBe('Mars');
  });

  it('returns the price', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99);
  });
});
