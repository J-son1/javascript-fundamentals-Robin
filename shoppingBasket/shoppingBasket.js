class ShoppingBasket {
  constructor() {
    this.candies = [];
    this.discount = 0;
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.forEach((candy) => {
      totalPrice += candy.getPrice();
    });

    return totalPrice - this.discount;
  }

  addItem(candy) {
    this.candies.push(candy)
  }
}

module.exports = ShoppingBasket;
