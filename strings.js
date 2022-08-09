// concatination

// adding numbers and strings
// adding strings and numbers
// including variables in strings

// / escape character


// METHODS
let string = "jason smith";

// .length
console.log(`"jason smith" length: ${string.length}`) // returns the amount of characters in the string including white spaces

// .slice(start, end)
console.log(`"jason smith" .slice(6, 11): ${string.slice(6, 11)}`) // returns a section of the string at the given indexs
console.log(`"jason smith" .slice(-2, 11): ${string.slice(-2, 11)}`) // Negative numbers can be used, it shifts the index and loops back through the string
console.log(`"jason smith" .slice(2): ${string.slice(2)}`) // if no 2nd parameter is given, it will return the rest of the string

// .substring(start, end)
console.log(`"jason smith" .substring(6, 11): ${string.substring(6, 11)}`) // returns a section of the string at the given indexs
console.log(`"jason smith" .substring(-2, 11): ${string.substring(-2, 11)}`) // Negative numbers are treated as 0
console.log(`"jason smith" .substring(2): ${string.substring(2)}`) // if no 2nd parameter is given, it will return the rest of the string

// .substr(start, length)
console.log(`"jason smith" .substr(6, 3): ${string.substr(6, 3)}`) // 
console.log(`"jason smith" .substr(4, -2): ${string.substr(4, -2)}`) // cant handle reverse index loop on second parameter
console.log(`"jason smith" .substr(-4, 2): ${string.substr(-4, 2)}`) // can handle nagative numbers on the start parameter

// .replace('string to replace', 'string')
const string2 = "jason jason jason smith";
console.log(`"jason jason jason smith" .replace('jason', "kevin"): ${string2.replace('jason', "kevin")}`) // returns a new string, replaces only the first match, is case sensitive
console.log(`"jason jason jason smith" .replace('/JASON/i', "kevin"): ${string2.replace(/JASON/i, "kevin")}`) // case insensitive
console.log(`"jason jason jason smith" .replace('/jason/g', "kevin"): ${string2.replace(/jason/g, "kevin")}`) // applies the replacement globally, matching every word in the string.

// .toUpperCase(string)
console.log(string.toUpperCase()) // returns a new string with all characters in uppercase, original string is uneffected.

// .toLowerCase(string)
console.log(string.toLowerCase()) // returns a new string with all characters in uppercase, original string is uneffected.

// .concat(string1, string2)
const stringHello = "hello";
const stringWorld = "world";
const words = stringHello.concat(" ", "my", " ", stringWorld);
console.log(`stringHello.concat(" ", "my", " ", stringWorld) = ${words}`);

// .trim()
const preTrimString = " string " // string containing white space at beginning and end
console.log(preTrimString)
console.log(preTrimString.trim()) // removes whitespace from beginning and end of string

let text = "jason"
// .padStart(length, what character to use)
let paddstart = text.padStart(10,"x"); // the 4 is the total length of characters, it must be larger that the length of the string to show any padding
// jason is 5 characters long, so the length would need to be at least 5 in order to display the characters
console.log(paddstart)

// .padEnd(amount, what character to use)
let paddend = text.padEnd(10,"x");
console.log(paddend)

// .charAt(index)
console.log(`"jason smith".charAt(0) = ${string.charAt(0)}`) // returns the character at the index
console.log(`"jason smith".charAt(3) = ${string.charAt(3)}`)

// .charCodeAt(index)
console.log(`"jason smith".charCodeAt(0) = ${string.charCodeAt(0)}`) // returns the unicode of the character at the index
console.log(`"jason smith".charCodeAt(3) = ${string.charCodeAt(3)}`)

// .split("character used to identify where to split")
console.log(string.split(" ")) // converts a string into an array, " " separates each word as an array item
console.log(string.split("")) // converts a string into an array, "" separates each letter as an array item

// .indexOf() method returns the index of the first occurrence of a specified text in a string
console.log(`"jason jason jason smith".indexOf("jason") = ${string2.indexOf("jason")}`)

// .lastIndexOf() method returns the index of the last occurrence of a specified text in a string
console.log(`"jason jason jason smith".lastIndexOf("jason") = ${string2.lastIndexOf("jason")}`)

// indexOf methods cannot take powerful search values (regular expressions).

// .search(" ") : cannot take a second start position argument.
console.log(`"jason jason jason smith".search("jason") = ${string2.search("jason")}`)
console.log(`"jason jason jason smith".search("smith") = ${string2.search("smith")}`)

// .startsWith(" ", optional index starting point) : case sensitive
console.log(`"jason smith".startsWith("j") = ${string.startsWith("j")}`) // returns boolean if he string starts with given character
console.log(`"jason smith".startsWith("jas") = ${string.startsWith("jas")}`) // returns boolean if he string ends with given character
console.log(`"jason smith".startsWith("jason") = ${string.startsWith("jason")}`) // returns boolean if he string ends with given character

// endsWith(" ", optional index starting point) : case sensitive
console.log(`"jason smith".endsWith("j") = ${string.endsWith("j")}`) // returns boolean if he string ends with given character


// .match(regexp) : searches a string for a match against a regular expression, and returns the matches, as an Array object.
console.log(`"jason smith".match("j") = ${string.match(/s/g)}`) // 
const matchResult = string.match(/s/g);
console.log(matchResult);

// .includes(" ")
console.log(`"jason smith".includes("smith") = ${string.includes("smith")}`) //  returns true if a string contains a specified value.
