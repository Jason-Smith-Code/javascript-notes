// Variables are used to store data values

// identifier
var variableName;
// variableName is the identifer
// must begin with a letter, $, or _.
// Can contain numbers.
// case sensitive
// must be unique
// must be descriptive

// Variable declaration
var x;
let y;
// const z;  declaring a const variable without a value will produce a syntax error
const z = 1;
// all declared variables will default to undefined if a value has not been assigned.

// redeclaring variables
var x;
// let y; // cannot redeclare a let variable
// const z = 1; // cannot redeclare a const variable

// assigning a value
x = 5;
y = 10;

// var
// The var keyword is used in all JavaScript code from 1995 to 2015.

// let
// The let keyword was introduced in ES6 (2015).
// Variables defined with let cannot be Redeclared.
// Variables defined with let must be Declared before use.
// Variables defined with let have Block Scope.
// Using a let variable before it is declared will result in a ReferenceError:

// const
// const keyword was added to JavaScript in 2015.
// defines a constant reference to a variable.
// cannot reassing a constant value, array, or object
// you can change the value of an array element, or property of an object defined with const.
// Using a const variable before it is declared will result in a ReferenceError:

// scope

// hoisting
// Variables defined with var are hoisted to the top and can be initialized at any time.
// Variables defined with const are also hoisted to the top, but not initialized.
// Variables defined with let are also hoisted to the top, but not initialized.

// what is initialized
