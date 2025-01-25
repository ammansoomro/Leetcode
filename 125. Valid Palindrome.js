/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome. */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const formatted = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = formatted.length - 1;
  while (start <= end) {
    if (formatted[start] === formatted[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

const testCases = [
  { s: "A man, a plan, a canal: Panama", expected: true }, // Palindrome after cleaning
  { s: "race a car", expected: false }, // Not a palindrome
  { s: " ", expected: true }, // Empty string after cleaning
  { s: "No 'x' in Nixon", expected: true }, // Palindrome with mixed case and punctuation
  { s: "12321", expected: true }, // Numeric palindrome
  { s: "12345", expected: false }, // Non-palindromic numbers
  { s: "ab@#ba", expected: true }, // Palindrome with special characters
  { s: "abcdef", expected: false }, // Plain string, not a palindrome
  { s: "", expected: true }, // Empty input, palindrome by definition
];

for (let i = 0; i < testCases.length; i++) {
  const { s, expected } = testCases[i];
  const result = isPalindrome(s);
  console.log(`Input: s = "${s}"`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
