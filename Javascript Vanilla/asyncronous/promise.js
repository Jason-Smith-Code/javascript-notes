// construct promise : setting up something to be comlpeted at a later point

const promise1 = new Promise((resolve, reject) => {
  const condition = 10;
  if (condition > 12) {
    resolve("resolved");
  } else {
    reject("rejected");
  }
});

// once you have a promnise you need to then use it with .then()

promise1.then(
  // success
  (value) => {
    console.log(`Success: ${value}`);
  },
  // error
  (error) => {
    console.log(`error: ${error}`);
  }
);
