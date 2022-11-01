// setInterval + clearInterval
let counter = 0;

function run() {
  counter++;
  if (counter >= 5) {
    clearInterval(internval1); // pass in the constant which stores the setInterval
  }
  console.log(`running ${counter}`);
}

const internval1 = setInterval(run, 1000); // The first argument is the function you want to run, the second is the interval in milliseconds
