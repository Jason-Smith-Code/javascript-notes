// Number()
console.log(Number(true))
console.log(Number("10"))
console.log(Number("  10"))
console.log(Number("10  "))
console.log(Number(" 10  "))
console.log(Number("10.33"))
console.log(Number("10,33"))
console.log(Number("10 33"))
console.log(Number("John"))
console.log(Number(new Date("1970-01-01"))) // returns the number of milliseconds since ths date.

// parseInt()
console.log(parseInt("-10"))
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));


// parseFloat()
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));
// If the number cannot be converted, NaN (Not a Number) is returned.

