// Math methods

// Math.abs() : returns the absolute value of a number.
const absoluteValue = Math.abs(-25.663);
console.log(`Math.abs(-25.663) : ${absoluteValue}`);

// Math.acos() : returns the arccosine (in radians) of a number. For values less than -1 or greater than 1, Math.acos() returns NaN.
console.log(`Math.acos(-1) : ${Math.acos(-1)}`);
console.log(`Math.acos(0) : ${Math.acos(0)}`);
console.log(`Math.acos(1) : ${Math.acos(1)}`);

// Math.random() : returns the random value of a number.
console.log(`Math.random()*100 : ${Math.random() * 100}`); // generates a random number between 0 and 100

// Math.ceil() : rounds a number up to the next largest integer.
console.log(`Math.ceil(45.2345) : ${Math.ceil(45.2345)}`);

// Math.floor() : returns the largest integer less than or equal to a given number.
console.log(`Math.floor(45.2345) : ${Math.floor(45.2345)}`);

// Math.max() : returns the largest of the zero or more numbers given as input parameters, or NaN if any parameter isn't a number and can't be converted into one.
console.log(`Math.max(1,2,3,4,5) : ${Math.max(1, 2, 3, 4, 5)}`);

// Math.min() : returns the lowest-valued number passed into it, or NaN if any parameter isn't a number and can't be converted into one.
console.log(`Math.min(1,2,3,4,5) : ${Math.min(1, 2, 3, 4, 5)}`);

// Math.pow() : given two arguments, base and exponent, returns baseexponent
console.log(`Math.pow(3, 3) : ${Math.pow(3, 3)}`);
