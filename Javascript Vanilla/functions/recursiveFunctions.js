//

// by calling the function again inside its own function we create a RangeError: Maximum call stack size exceeded
// to avod this, we need a condition inside the function which calls itself.
const recursiveFunction = function test(i) {
  console.log(i);
  if (i < 10) {
    // condtion to break the recursion
    i++;
    test(i);
  }
};

recursiveFunction(1);
