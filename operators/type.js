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