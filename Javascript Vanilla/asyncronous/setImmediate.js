// setImmediate : runs code at the end of the first cycle.
console.log("first");
setImmediate((value) => {
  console.log(`immediate ${value}`);
}, "hello world");
console.log("last");
// first
// last
// immediate hello world
