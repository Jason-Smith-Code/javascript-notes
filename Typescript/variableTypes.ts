// Assigning a type to a variable
// variableName: type

// bare in mind, that this only applies when you are not assigning a variable a value
// if we are assigning a value, then TS will automatically assign its type based on the value entered.

let x: number; // must be a number
let answer: boolean; // must be a boolean

// Arrays
let myWordArray: string[] = []; // can only contain strings
let myNumberArray: number[] = []; // can only contain numbers
let tuple: [number, boolean, string]; // can contain assigned data matching the types at the array indexs
const graph: [x: number, y: number] = [55.2, 41.3]; // named tuple

let firstName: string; // must be a string
let variableName: any; // any data type, not used often, avoid is possible.
// undefined : value is undefined
// null : value is nothing
function log(message: string): void {} // void : no value returned

// combining types in a single variable
let surname: string | undefined | null;
