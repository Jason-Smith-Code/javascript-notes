// Immediately invoked function expression

(function () {
  // this function will be called right away
})();

const a = 5;
const b = 7;

(function (a, b) {
  // this function will be called right away
  console.log(a + b); // returns NAN
})();

// correct way
(function (a, b) {
  // this function will be called right away
  console.log(a + b); // returns 12
})(a, b);

//  arrow function IIFE

(() => {
  console.log("arrow function IIFE");
})();


// good place to use these are in events, like when a user clicks a button.