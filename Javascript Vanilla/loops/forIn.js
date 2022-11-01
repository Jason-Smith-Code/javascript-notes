// looping through an object and getting each attribute value
const person = {
  name: "John",
  age: 34,
  film: "matrix",
};

// get each value
for (let key in person) {
  console.log(person[key]);
}

// get both the key and value

for (let key in person) {
  console.log(key, person[key]);
}
