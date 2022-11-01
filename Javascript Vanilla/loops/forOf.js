// for of : Array

const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// for of : Map
const iterable = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// return entries
for (const entry of iterable) {
  console.log(entry);
}

// return values
for (const [key, value] of iterable) {
  console.log(value);
}

// keys
for (const [key, value] of iterable) {
  console.log(key);
}

// for of : Sets
const iterableSet = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterableSet) {
  console.log(value);
}
// 1
// 2
// 3

// breaking the iteration
for (const element of array1) {
  console.log(element);
  if (element === "b") {
    break;
  }
}
