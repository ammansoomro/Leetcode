/* Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
  */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }

  return i === s.length;
};

const testCases = [
  { s: "abc", t: "ahbgdc", expected: true },
  { s: "axc", t: "ahbgdc", expected: false },
  { s: "", t: "ahbgdc", expected: true },
  { s: "a", t: "", expected: false },
  { s: "ahbgdc", t: "ahbgdc", expected: true },
  { s: "ace", t: "abcde", expected: true },
  { s: "aec", t: "abcde", expected: false },
  { s: "abcd", t: "abdc", expected: false },
  { s: "b", t: "abc", expected: true },
  { s: "z", t: "abc", expected: false },
];

for (let i = 0; i < testCases.length; i++) {
  const { s, t, expected } = testCases[i];
  const result = isSubsequence(s, t);
  console.log(`Input: s = "${s}", t = "${t}"`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
