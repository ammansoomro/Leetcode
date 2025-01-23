/* Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal 
substring
 consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6. */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let filter = s.split(" ").filter((char) => char != "");
  return filter[filter.length - 1].length;
};

const testCases = [
  { s: "Hello World", expected: 5 }, // Last word is "World"
  { s: "   fly me   to   the moon  ", expected: 4 }, // Last word is "moon"
  { s: "luffy is still joyboy", expected: 6 }, // Last word is "joyboy"
  { s: "a", expected: 1 }, // Single word "a"
  { s: "  day  ", expected: 3 }, // Last word is "day"
  { s: "trailing spaces   ", expected: 6 }, // Last word is "spaces"
];

for (let i = 0; i < testCases.length; i++) {
  const { s, expected } = testCases[i];
  const result = lengthOfLastWord(s);
  console.log(`Input: s = "${s}"`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
