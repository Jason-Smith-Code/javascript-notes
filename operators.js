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

// Assignment operator =

// Assignment operator +=
var x, y;
x += y; // this
x = x + y; // is the same as this

// Assignment operator -=
x -= y; // this
x = x - y; // is the same as this

// Assignment operator *=
x *= y; // this
x = x * y; // is the same as this

// Assignment operator /=
x /= y; // this
x = x / y; // is the same as this

// Assignment operator %=
x %= y; // this
x = x % y; // is the same as this

// Assignment operator **=
x **= y; // this
x = x ** y; // is the same as this

// Comparison operator == is equal to (compares value)
console.log(`1 == "1" : ${1 == "1"}`);
console.log(`null == null : ${null == null}`);
console.log(`undefined == undefined : ${undefined == undefined}`);
console.log(`{} == {} : ${{} == {}}`);

// Comparison operator === is strict equal to ( compares value and type)
console.log(`1 === "1" : ${1 === "1"}`);
console.log(`null === null : ${null === null}`);
console.log(`undefined === undefined : ${undefined === undefined}`);
console.log(`{} === {} : ${{} === {}}`);

// Comparison operator != not equal to

// Comparison operator !== not strict equal to

// Comparison operator > greater than

// Comparison operator < less than

// Comparison operator >= greater than or equal to

// Comparison operator <= less than or equal to

// Comparison operator ? ternary
x > y ? true : false;

// Logical operator and : &&

// Logical operator or : ||

// Logical operator not : !

// Bitwise work on 32 bits numbers

// Bitwise operator and : &
console.log(`15 & 2: ${15 & 2}`);
console.log(`2 & 15: ${2 & 15}`);

// Bitwise operator or : |
console.log(`15 | 2: ${15 | 2}`);
console.log(`2 | 15: ${2 | 15}`);

// Bitwise operator not : ~

// Bitwise operator xor : ^
console.log(`15 ^ 2: ${15 ^ 2}`);
console.log(`2 ^ 15: ${2 ^ 15}`);

// Bitwise operator left shift: <<
console.log(`15 >> 2: ${15 >> 2}`);
console.log(`2 >> 15: ${2 >> 15}`);

// Bitwise operator right shift: >>
console.log(`15 << 2: ${15 << 2}`);
console.log(`2 << 15: ${2 << 15}`);

// typeof operator : typeof
// You cannot use typeof to define if a JavaScript object is an array (or a date).
console.log(`typeof "Jason Smith" : ${typeof "Jason Smith"}`);
console.log(`typeof 3.14 : ${typeof 3.14}`);
console.log(`typeof NaN : ${typeof NaN}`);
console.log(`typeof true : ${typeof true}`);
console.log(`typeof [] : ${typeof []}`); // arrays are objects!
console.log(`typeof {} : ${typeof {}}`);
console.log(`typeof new Date() : ${typeof new Date()}`);
console.log(`typeof function() {} : ${typeof function () {}}`);
console.log(`typeof null : ${typeof null}`);
let variableName; // variable with no value
console.log(`typeof variableName : ${variableName}`);

// delete operator

// in operator



// instanceof operator : Returns true if an object is an instance of an object type

// void operator

// yield ( pause function)
