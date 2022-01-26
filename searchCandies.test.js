const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  it('returns candies that start with "Ma" and are under 10', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Maltesers', 'Mars' ]);
  });

  it('returns candies that start with Ma and are under 2', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });

  it('returns candies that start with S and are under 10', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });

  it('returns candies that start with S and are under 4', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
});
