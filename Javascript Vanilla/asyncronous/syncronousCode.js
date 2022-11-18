// the order of code which will be executed

const arr = [1, 2, 3, 4, 5, 6];

// syncronous code
console.clear();
arr.forEach((element) => {
  console.log(element);
  console.log("syncronous");
});

function aFun(array, callback) {
  array.forEach((element) => {
    setTimeout(callback, 1000);
  });
}

aFun(arr, (value) => {
  console.log(value);
  console.log("async");
});

console.log("test");
