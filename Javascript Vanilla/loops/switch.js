const value = "yes";

switch (value) {
  case "true":
    console.log("it was true");
    break;
  case "false":
    console.log("it was false");
    break;
  default:
    console.log("it was neither yes or no");
}

// Default runs if the value was not matched.
// break prevents the rest of the switch running if a condition is matched.
