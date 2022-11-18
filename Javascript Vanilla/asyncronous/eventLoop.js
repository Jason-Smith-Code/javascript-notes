// an explaination of the event loop, and the order of events

const one = () => console.log("one"); // event loop 4
const two = () => console.log("two"); // event loop 6

const eventLoop = () => {
  console.log("three"); // event loop 2
  one(); // event loop 3
  two(); // event loop 5
};

eventLoop(); // event loop 1
