// v1 complete

// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s
// Don't forget to return the result.
// Remember that return true (boolean) is not the same as return "true" (string).
// This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

module.exports = (word) => {
  lastLetter = word.length - 1;
if (word.charAt(lastLetter) === 's') {
  return 'True!'; // returning the string True, can set to bool val if needed
} else {
  return 'False!'; // returning the string False, can set to bool val if needed
}
};

// test conditions

console.log(module.exports('Hello')); // should rtn False!
console.log(module.exports('Tools')); // should rtn True!
console.log(module.exports('Tool')); // should rtn False!