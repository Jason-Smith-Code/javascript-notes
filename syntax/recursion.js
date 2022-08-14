// Recursion : a process where a function calls itself, it must contain a condition, or range error will occur : max call stack exceeded

// Recursion : example
function countDown(number) {
  console.log(number);
  const newNumber = number - 1;

  if (newNumber > 0) {
    countDown(newNumber);
  }
}
countDown(4);
