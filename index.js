const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  // Write your algorithm here
  const myArr = word.split("");
  const reversedArr = [...myArr].reverse().join("");
  if (word === reversedArr) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here
  -Pass in a word/set of characters 
  -Convert the set of characters into an array using .split()
  -Compare the original set of characters with the stringified reversed array
  -If the result is the same, return true. Else return false
*/

/*
  Add written explanation of your solution here
  myArr->an array formed from the set of characters passed in
  reversedArr->this is the reversed version of myArr having been joined into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
