const User = require('./user');

describe('User', () => {
  it('returns a name', () => {
    const user = new User('Uma');
    expect(user.getName()).toBe('Uma');
  })

  it('returns an introduction', () => {
    const user = new User('Uma');
    expect(user.getIntroduction()).toBe('Hi, my name is Uma');
  })
})