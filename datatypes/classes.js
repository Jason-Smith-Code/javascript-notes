// introduced in ES6
// Classes are templates for objects
// always add a contructor

// creatinig a class
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

// using a class
let myCar1 = new Car("Ford", 2014);

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

// Class inheritance

// static
