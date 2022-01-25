const addToBatch = (array, number) => {
  if (array.length <= 5) {
    return array.concat(number);
  }

  return array;
}

console.log(addToBatch([1, 3], 3));

console.log(addToBatch([1, 2, 3], 4)); 

console.log(addToBatch([], 8));

console.log( addToBatch([1, 2, 3, 4, 5, 6], 7));
