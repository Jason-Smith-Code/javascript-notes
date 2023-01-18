// typescript Types

// boolean
// string
// number
// array
// undefined
// null
// void : The type void can be used to indicate a function doesn't return any value
function printHello(): void {
    console.log('Hello!');
}
// any
// unknown
// never : Throws error if it is defined
// readonly : can prevent arrays from being changed

// Type Assignment
// explicit type assignment Example : where you manually declare it yourself in the code
let explicitAssigned: string = "Dylan";
// implicit type assignment : where you dont manually declare it, but the variable has a value, and this is then "inferred" based on the value.
// sometimes typescript is unable to infer, which then defaults to a type of "any"
let implicitAssigned = "Dylan";

// Type Inferance : when you declare a variable, and also assign that variable with a value without declaring its type, the type can then be inferred.
// variable must be declared and assigned.
// sometimes doesn't work resulting in T<any>

// create a new type

type TypeNames = {
    id: number,
    name: string,
    icon?: string 
}

// "TypeNames" can now be used as a type when checking against variables
let variable: TypeNames["name"]; // string

// Type Alias : allows you to change the nname of a type to something more suitable
type BusYear = number
type BusType = string
type BusModel = string
type Bus = {
  year: BusYear,
  type: BusType,
  model: BusModel
}

const busYear: BusYear = 2001
const busType: BusType = "Toyota"
const busModel: BusModel = "Corolla"
const bus: Bus = {
  year: busYear,
  type: busType,
  model: busModel
};

// union types : allows us to assign more than one data type to a variable
let unionType: string | number | undefined;
