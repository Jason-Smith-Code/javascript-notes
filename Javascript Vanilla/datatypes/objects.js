// Create Literal Object
let hotel = {
  name: "Quay",
  rooms: 30,
  booked: 25,
  gym: true,
  roomTypes: ["single", "twin", "suite"],
  checkAvailablity: function () {
    return this.rooms - this.booked;
  },
};
console.log(hotel);

// Create an Object constructor
var objectName = new Object();

objectName.name = "Quay";
objectName.rooms = 30;
objectName.booked = 25;
objectName.gym = true;
objectName.roomTypes = ["single", "twin", "suite"];
objectName.checkAvailablity = function () {
  return this.rooms - this.booked;
};

// delete an object property
delete objectName.name;
console.log(objectName);
// what happens when you delete a property?

// Creating lots of objects using a function constructor | Note that classes are the new way to do this
function hotelConstructor(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
}

// using the object constructor to create objects
let quayhotel = new hotelConstructor("Quay", 30, 25);

// accessing object properties
quayhotel.name;

// re-assigning object properties
quayhotel.name = "not Quay anymore";
console.log(quayhotel);

// convert object into an array
console.log(Object.entries(quayhotel));

// convert into an array of keys
console.log(Object.keys(quayhotel));

// convert into an array of values
console.log(Object.values(quayhotel));
