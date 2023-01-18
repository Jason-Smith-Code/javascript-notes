// Destructuring

// Destructuring is the removal of dot notation when accessing values from an object

// example using dot notation

const objectPerson = {
    name: "jason",
    age: 39
}

const personName = objectPerson.name

// context of using a function
function getPersonDetails(objectPerson) {
    console.log(`${objectPerson.name}`)
    console.log(`${objectPerson.age}`)
}

getPersonDetails(objectPerson)

// using destructuring

// here we have gone inside the person object in the parameter, and referenced the object parameters to use as function parameters therefore removing dot notation.
function getPersonDetailsDestructured({name, age}) {
    console.log(`${name}`)
    console.log(`${age}`)
}

getPersonDetailsDestructured(objectPerson)

//  by destructuring we can access the properties of an object, and when we assign open curly braces to an object, then press CTRL + SPACE we can see which properties are available
const { floor } = Math;
const flooredNumber = floor(4.24)
console.log(flooredNumber)

// if we are using Math.floor() often enough, or other properties of the Math object, its much better to destructure the Math object, its less code to write