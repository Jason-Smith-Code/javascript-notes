// Function declaration
function area(width, height) {
  return width * height;
}

// Function expression ( stored in variable)
let area2 = function (width, height) {
  return width * height;
};

// Immediately invoked function
let area3 = (function () {
  let width = 2;
  let height = 3;
  return width * height;
})();
console.log(area3);

