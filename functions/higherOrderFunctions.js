// Higher order functions : provide a higher level of abstraction for functions.

// array to work with in the examples below
const numbers = [1, 2, 3, 4, 5];

// Example 1 : not using a higher order function
function addOne(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] + 1);
  }
}
addOne(numbers);

// Example 1 : using a higher order function
numbers.forEach((number) => console.log(number + 1));

// Example 2 : not using a higher order function
function isOdd(array, oddArr = []) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArr.push(array[i]);
    }
  }
  return oddArr;
}
const oddArray = isOdd(numbers);
console.log(oddArray);

// Example 2 : using a higher order function
const oddArray2 = numbers.filter((number) => number % 2 !== 0);
console.log(oddArray2);
