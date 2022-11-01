// async function

// An async function is a function declared with the async keyword, and the await keyword is permitted within it.
// The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

// an async function without an await will run syncronously
async function hello(argument) {
  console.log(argument); // hi
  const message = "message: ";
  return message + argument; // h1 (this is the value returned by the promise)
}

// run the async function & handle the promise by using .then()
hello("argument").then((promiseReturnedValue) => {
  console.log(promiseReturnedValue); // hi1
});

// await : kicks in when promise has resolved
// an async function without an await will run asyncronously

