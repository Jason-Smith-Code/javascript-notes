function test(value) {
  try {
    if (value < 1) throw "error: number less that 1";
    if (isNaN(value)) throw "error: not a number";
    if (value >= 1) {
      console.log(value);
    }
  } catch (error) {
    console.log(error);
  } finally {
    // finally executed regardless of whether it was successful or not
    console.log("finally"); // this will always execute
  }
}

test(0);
test(1);
test("tomato");
