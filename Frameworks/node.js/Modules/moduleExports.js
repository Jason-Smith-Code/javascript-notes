// Exporting a module


// module content
const functionName = () => {
  console.log("test");
};

const personOject = {
  name: "jason",
  age: "22",
};

// exporting 
module.exports.functionName = functionName;
module.exports.personOject = personOject;
