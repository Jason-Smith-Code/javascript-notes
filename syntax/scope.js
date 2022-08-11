// global scope
// this is global scope
let globalLet = 1;
const globalConst = 2;
// these can be accessed anywhere in this script

// note that we can use the same names for variables in different scopes, although they share the same name, their data iis stored in a different container.
// its not good practice to duplicate your variable names, even if scope allows you to, always use unique names.

function functionScope() {
  // function scope
  let functionLet = 1;
  const functionConst = 2;
  var functionVar = 3;
}

{
  // block scope / local scope
  let blockLet = 1;
  const blockConst = 2;
  var blockVar = 34;
}

// Key points
// variables declared with var, have no scope and can be accessed from anywhere, with the excepton of beiing declared inside a function
console.log(blockVar);
console.log(functionVar); // produces reference error.

// DONE
