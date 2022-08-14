// .forEach(functionName) : method calls a function for each element in an array. introduced in ECMAScript5 (ES5)

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

//
array.forEach((item) => console.log((item += 1)));

//
function timesTwo(number) {
  return number * 2;
}

array.forEach((item) => console.log(timesTwo(item)));
