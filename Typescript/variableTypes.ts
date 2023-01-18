// Assigning a type to a variable
// variableName: type

// bare in mind, that this only applies when you are not assigning a variable a value
// if we are assigning a value, then TS will automatically assign its type based on the value entered.

let x: number; // must be a number
let answer: boolean; // must be a boolean
let myWordArray: string[]; // can only contain strings
let myNumberArray: number[]; // con only contain numbers
let firstName: string; // must be a string
let variableName: any; // any data type, not used often, avoid is possible.
// undefined : value is undefined
// null : value is nothing
function log(message: string) :void{} // void : no value returned
// enumeration (enum) - a set of named constants like an object with no values
enum ProductType {
   Tomatos, // default value 0
   Cucumber, // 1
   Chocolate  // 2
}
let foodType = ProductType.Chocolate;

// combining types in a single variable
let surname: string | undefined | null;
