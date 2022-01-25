const generateMessages = namesAndDiscounts => {
  return namesAndDiscounts.map(customer => {
    return `Hi ${customer.name}! ${customer.discount}% off our best candies for you today!`;
  });
};

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));
