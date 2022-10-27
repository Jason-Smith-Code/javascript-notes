// Pure functions
// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed.
// The returned result only depends on its input arguments.

// pure function : only uses input argument
function calculateGST(productPrice) {
  return productPrice * 0.05;
}

// not a pure function : because it uses an external variable "tax"
var tax = 20;
function calculateGST(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}
