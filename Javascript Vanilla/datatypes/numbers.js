// javascript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.
// accurate up to 15 digits
// maximum number of decimal places is 17

// floating precison is not accurate
var x;
console.log(`x = 0.2 + 0.1 = ${(x = 0.2 + 0.1)}`);
console.log(`(0.2 * 10 + 0.1 * 10) / 10 = ${(0.2 * 10 + 0.1 * 10) / 10}`);

// .toString() : returns a number as a string
console.log(`(5 + 10).toString() = ${(5 + 10).toString()}`);

// .toExponential(number of decimal places) : returns a string, with a number rounded and written using exponential notation.
x = 965658458.989;
console.log(`x.toExponential(1) = ${x.toExponential(1)}`);
console.log(`x.toExponential(2) = ${x.toExponential(2)}`);
console.log(`x.toExponential(3) = ${x.toExponential(3)}`);

// .toFixed(number of decimal places) : returns a string, with the number written with a specified number of decimals, rounds up
x = 9658.98965366;
console.log(`x.toFixed(1) = ${x.toFixed(1)}`);
console.log(`x.toFixed(2) = ${x.toFixed(2)}`);
console.log(`x.toFixed(3) = ${x.toFixed(3)}`);

// .toPrecision() : returns a string, with a number written with a specified length:
x = 9658.98965366;
console.log(`x.toPrecision(1) = ${x.toPrecision(1)}`);
console.log(`x.toPrecision(2) = ${x.toPrecision(2)}`);
console.log(`x.toPrecision(3) = ${x.toPrecision(3)}`);

// .valueOf() : returns a number as a number.
