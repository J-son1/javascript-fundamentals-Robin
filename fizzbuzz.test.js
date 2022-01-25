const fizzbuzz = require('./fizzbuzz.js');

describe('fizzbuzz', () => {
  it('returns "Fizz" when number is 3', () => {
    expect(fizzbuzz(3)).toMatch('Fizz');
  });

  it('returns "Buzz" when number is 5', () => {
  expect(fizzbuzz(5)).toMatch('Buzz');
  })

  it('returns "FizzBuzz" when number is 15', () => {
    expect(fizzbuzz(15)).toMatch('FizzBuzz');
  });

  it('returns the number when the number in not divisible by 3 or 5', () => {
    expect(fizzbuzz(1)).toBe(1);
  });
});
