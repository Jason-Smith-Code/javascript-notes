// Addition
console.log(`Addition : 12 + 3 : ${12 + 3}`);
console.log(`Addition : 3 + 5 + "YES" : ${3 + 5 + "YES"}`); // Numbers before string get calculated
console.log(`Addition : "YES" + 3 + 5 : ${"YES" + 3 + 5}`); // Numbers after string are concatenated

// Subtraction
console.log(`Subtraction : 12 - 3 : ${12 - 3}`);

// Multiplication
console.log(`Multiplication : 12 * 3 : ${12 * 3}`);

// 	Exponentiation (ES2016)
console.log(`Exponentiation  : 12 ** 3 : ${12 ** 3}`); // 12 x 12 x 12

// Division
console.log(`Division  : 12 / 3 : ${12 / 3}`);

// Modulus (division remainder)
console.log(`Modulus  : 12 % 3 : ${12 % 3}`);

// Increment
let xIncrement = 12;
let yIncrement = 12;
console.log(`Increment before : ++12 : ${++xIncrement}`); // addes 1 before its logged
console.log(`Increment after : 12++ : ${yIncrement++}`); // addes 1 after its logged
console.log(`Increment after result : ${yIncrement}`);

// Decrement
let xDecrement = 12;
let yDecrement = 12;
console.log(`Decrement before : --12 : ${--xDecrement}`); // addes 1 before its logged
console.log(`Decrement after : 12-- : ${yDecrement--}`); // addes 1 after its logged
console.log(`Decrement after result : ${yDecrement}`);