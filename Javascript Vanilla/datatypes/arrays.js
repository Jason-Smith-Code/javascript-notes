// ways to create an array
const array_name = ["item1", "item2", "item3"]; // can contain strings
const choiceArray = [true, false]; // can contain boolean values

const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// ways to access an array
console.log(cars[0]);
console.log(cars);

// ARRAY METHODS

// array.length : returns the number of items in the given array
console.log(`array_name.length = ${array_name.length}`);

// array.toString() : converts array elements to strings if possibile
console.log(`cars.toString() = ${cars.toString()}`);
console.log(`choiceArray.toString() = ${choiceArray.toString()}`);

// array.join(separator) : joins all array items into a single string separated by the given separator.
console.log(`cars.join(".") = ${cars.join(".")}`);

// array.pop() : Removes the last element from an array : Returns the item that was removed
console.log(`["item1", "item2", "item3"].pop() = ${array_name.pop()}`); // changes the original array
console.log(array_name); // item3 was removed

// array.push(item) : Adds item(s) to an array : Returns the new array length
console.log(`["item1", "item2"].push("item3") = ${array_name.push("item3")}`); // changes the original array
console.log(array_name); // new item was added to the end

// array.shift() : Removes the first item from an array : Returns the item that was removed
console.log(
  `["item1", "item2", "item3"].shift("item3") = ${array_name.shift()}`
); // changes the original array
console.log(array_name); // new item was added to the end

// array.unshift() : Removes the first item from an array : Returns the item that was removed
console.log(
  `["item2", "item3"].unshift("item3") = ${array_name.unshift("item1")}`
); // changes the original array
console.log(array_name); // new item was added to the start of the array

// .concat() : merging arrays
const array1 = ["item1", "item2", "item3", "item4"];
const array2 = ["item5", "item6", "item7", "item8"];
const array3 = ["item9", "item10", "item11", "item12"];
const concattedArray = array1.concat(array2, array3);
console.log(concattedArray);

// flatten arrays using concat

const nestedArray = [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]];
console.log(nestedArray);
const newArray = [].concat(...nestedArray); // the ...nestedArray removes the top level array square brackets.
console.log(newArray); // all nested items are now top level items

// splice(index start, number of items to be removed, item to be added, item to be added) : adds new items to an array.
concattedArray.splice(5, 2, "splice item", "splice item"); // starting at index 5, we delete 2 items, and add in 2
console.log(concattedArray);
// you can also use splice to just remove elements only with out adding anything.
concattedArray.splice(5, 2);
console.log(concattedArray);
console.log(concattedArray[5]);

// slice(index start, index end but not including) : creates a new array, returns a slice of the orignal array
const sllicedArray = concattedArray.slice(1, 3); // takes out index 1 and 2
console.log(sllicedArray);

// SORTING ARRAYS

// .sort() : alphabetical
var stringArray = ["ruby", "aquamarine", "teal", "amethyst", "diamond"];
console.log(stringArray);
stringArray.sort();
console.log(stringArray);

// .sort() : numerical : DOESNT WORK
var numberArray = [2, 9, 15, 1, -10];
console.log("original number array");
console.log(numberArray);
numberArray.sort();
console.log("sorted number array (doesn't work properly)");
console.log(numberArray);

// the compare function : function(a, b){return a - b}

// .sort() : numerical fixed
numberArray.sort(function (a, b) {
  return a - b;
});
console.log("sorted number array with function a - b");
console.log(numberArray);

// random sorting
numberArray.sort(function () {
  return 0.5 - Math.random();
});
console.log("sorted number array with function(){return 0.5 - Math.random() ");
console.log(numberArray);

// fisher yates method of random sorting
const points = [40, 100, 1, 5, 25, 10];
console.log(points);

console.log("applying fisher yates method of sorting");
for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * i);
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);

// find the highest oe lowest value in an array
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
var lowestNumber = points[0];
console.log("lowest Number");
console.log(points[0]);
var highestNumber = points[points.length - 1];
console.log("highest Number");
console.log(points[points.length - 1]);

// Math.max on arrays
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}
const maxNumber = myArrayMax(points);
console.log("Math.max.apply(null, array)");
console.log(maxNumber);

// Math.min on arrays
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
const minNumber = myArrayMin(points);
console.log("Math.min.apply(null, array)");
console.log(minNumber);

// .filter(function that returns boolean) : creates a new array with array elements that passes a test.
const filteredPointsArray = points.filter(myFilter);

function myFilter(value) {
  return value > 5;
}
console.log("filtered array with values over 5");
console.log(filteredPointsArray); // this is now a new array containing values that are greater than 5
// if works by running the given function on each item in the array. If it returns true, that item is pushed into the new array

// .reduce(function) : runs a function on each array element to produce (reduce it to) a single value. works from left-to-right in the array

// .reduceRight()

// .every()

// .some()

// .indexOf()

// .lastIndexOf()

// .find()

// .findIndex()

// .from()

// .keys()

// .includes()

// https://www.w3schools.com/jsref/jsref_obj_array.asp
