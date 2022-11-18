// creating a module

// create a package.json file
// create the file that will be loaded when your module s required
// test the module
// publish module on npm either privately or publically

console.log(module); // npm init in the module directory to allow this to be executed
console.log(module.id); // returns the id of the module
console.log(module.path); // returns the path to the module
console.log(module.exports); // returns an object containing all exported functions
console.log(module.loaded); // returns boolean indicating whether the module has been loaded
console.log(module.children); // returns an array of child modules
console.log(module.paths); // returns an array of paths to the module

// Module Types

// requiring a module : after requiring a module, we can then use that with dot notation to access functions within the exorted module
const exortedModuleName = require("./moduleExports");

exortedModuleName.functionName();
console.log(exortedModuleName.personOject.name);
