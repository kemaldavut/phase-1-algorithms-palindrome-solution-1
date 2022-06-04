function isPalindrome(word) {
  // Write your algorithm here
  return word.split('').reverse().join('') === word;
}

/*if (reverse().join('') === word) {
   console.log(true);
}
else console.log(false);
*/


/* 
  Add your pseudocode here
  1- Create a function that takes in a word
  2- Reverse the word
  3- Check if the reversed word is equal to the original word
  4- If it is, return true
  5- If it is not, return false
  6- Return the reversed word
  7- Return the original word
  8- thanks for github copilot


*/

/*
  Add written explanation of your solution here

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

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

