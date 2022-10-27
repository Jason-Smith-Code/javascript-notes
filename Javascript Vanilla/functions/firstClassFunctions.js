// first class functions : each of these is an example of a first class function
// functions can be assigned to variables
const sayHello = () => {
    return "hello";
  };
  
  // functions can be passed as arguments to other functions
  const sayHelloToPerson = (greeting, person) => {
    return greeting() + " " + person;
  };
  console.log(sayHelloToPerson(sayHello, "jason"));
  
  // functions can be returned from other functions
  const greetMaker = (greeting) => {
    // returning a function
    return (person) => {
      return greeting + " " + person;
    };
  };
  
  const sayHiToPerson = greetMaker("hi");
  console.log(sayHiToPerson("tom"));