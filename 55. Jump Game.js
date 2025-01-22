/* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

 

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let maxJump = 0;
  let n = nums.length;
  if (n === 1) {
    return true;
  }
  for (let i = 0; i < n; i++) {
    if (i > maxJump) {
      return false;
    }

    maxJump = Math.max(maxJump, i + nums[i]);

    if (maxJump >= n) {
      return true;
    }
  }
};

const testCases = [
  { nums: [2, 3, 1, 1, 4], expected: true },
  { nums: [3, 2, 1, 0, 4], expected: false },
  { nums: [0], expected: true }, // Only one element
  { nums: [2, 5, 0, 0], expected: true },
  { nums: [1, 0, 1, 0, 1], expected: false }, // Blocked by 0
];

for (let i = 0; i < testCases.length; i++) {
  const { nums, expected } = testCases[i];
  const result = canJump(nums);
  console.log(`Input: nums = ${JSON.stringify(nums)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
