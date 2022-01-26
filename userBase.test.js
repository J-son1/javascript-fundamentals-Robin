const UserBase = require('./userBase')
const User = require('./User')

const users = [
  new User('Uma'),
  new User('Josh'),
  new User('Ollie')
];

describe('UserBase', () => {
  it('counts the number of users', () => {
    const userBase = new UserBase(users);
    expect(userBase.count()).toEqual(3);
  });

  it('returns the names of users', () => {
    const userBase = new UserBase(users);
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });

  it('counts the number of users', () => {
    const userBase = new UserBase(users);
    expect(userBase.count()).toEqual(3);
  });
});
