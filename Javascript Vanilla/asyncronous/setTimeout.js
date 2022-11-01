// setTimeout
function timer(value) {
  console.log("timer ran" + value);
}

const timeout1 = setTimeout(timer, 1000, "timerout 1 : 1 second");

const timeout2 = setTimeout(timer, 3000, "timerout 2: 3 seconds");

// The first argument is the function you want to run.
// The second is the delay in milliseconds
// The third is optional, the argument you want to pass into the function you used in the first argument

// alternative
const timeout3 = setTimeout(() => {
  console.log("timeout 3 : 4 seconds");
}, 4000);
