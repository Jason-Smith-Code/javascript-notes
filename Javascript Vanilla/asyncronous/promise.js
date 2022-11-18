// construct promise : setting up something to be comlpeted at a later point

const promise1 = new Promise((resolve, reject) => {
  const condition = 10;
  if (condition > 12) {
    const resolved = "resolved";
    resolve(resolved);
  } else {
    const rejected = "rejected";
    reject(rejected);
  }
});

console.log(promise1); // Prints: Promise {<rejected> "rejected"}

// once you have a promise object you need to then use it with .then()

const checkPromise = () => {
  promise1
    .then((data) => {
      // handle success
      console.log(`Promise value: ${data} `);
    })
    .catch((error) => {
      // handle error
      console.log(`error: ${error}`);
    });
};

checkPromise();
