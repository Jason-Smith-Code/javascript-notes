// for loop iteration
for (var i = 0; i < 5; i++) {
  console.log(i);
}

// setTimeout behaviour
console.log("time out with var");
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
}
console.log("time out with let");
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i));
}

// looping through array
