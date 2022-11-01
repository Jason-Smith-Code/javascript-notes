// a function which returns a function.

function closureFunction(value) {
  return function (value2) {
    return value + value2;
  };
}

const result = closureFunction(5);

console.log(result(3));
