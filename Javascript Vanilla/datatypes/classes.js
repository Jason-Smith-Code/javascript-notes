// introduced in ES6
// Classes are templates for objects
// always add a contructor

// creating a class
class Vehicle {
  // properties - initialize properties of the car
  id = 0;
  name = "";
  speed = 0;

  // contructor
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  // functions
}

// using a class
let myCar1 = new Vehicle("Ford", 2014);

// the constructor
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties

// class methods
class ClassName {
  constructor(property1, property2) {
    this.property1 = property1;
    this.property2 = property2;
  }
  method_1() {}
}

// Class inheritance / extending classes - take a base class that has all the properties you need, and extend that class by inhereting those properties in a new class.
class Car extends Vehicle {
  // contructor
  constructor(name, year, wheels) { // add the parent class arguments aswell as the new arguments
    super(name, year); // calling super allows us to attached the parent arguements to be use in the new instance of the child class Car
    this.wheels = wheels; // define new arguments
  }
}

let myCar2 = new Car(); // hover over car to see 
// static
