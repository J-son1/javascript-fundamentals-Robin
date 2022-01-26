const ShoppingBasket = require('./shoppingBasket');

const candy = { 
  getName: () => 'Mars',
  getPrice: () => 4.99
}

describe('ShoppingBasket', () => {
  it('has an inital total price of 0', () => {
    const basket = new ShoppingBasket;
    expect(basket.getTotalPrice()).toEqual(0);
  });

  it('adds to the basket an item with a price of 4.99', () => {
    const basket = new ShoppingBasket;
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(4.99);
  });

  it('holds multiple candies with a total price of 14.97', () => {
    const basket = new ShoppingBasket;
    basket.addItem(candy);
    basket.addItem(candy);
    basket.addItem(candy);
    expect(basket.getTotalPrice()).toEqual(14.97);
  });
});
