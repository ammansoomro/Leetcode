/* You are given a 0-indexed array of integers nums of length n. You are initially positioned at nums[0].

    Each element nums[i] represents the maximum length of a forward jump from index i. In other words, if you are at nums[i], you can jump to any nums[i + j] where:

    0 <= j <= nums[i] and
    i + j < n
    Return the minimum number of jumps to reach nums[n - 1]. The test cases are generated such that you can reach nums[n - 1].

    

    Example 1:

    Input: nums = [2,3,1,1,4]
    Output: 2
    Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
    Example 2:

    Input: nums = [2,3,0,1,4]
    Output: 2
    */

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let maxJump = 0;
  let currentJump = 0;
  let jumps = 0;
  for (let i = 0; i < nums.length-1; i++) {
    maxJump = Math.max(maxJump, i + nums[i]);
    if (i === currentJump) {
      currentJump = maxJump;
      jumps++;
    }
  }
  return jumps;
};

const testCases = [
  { nums: [2, 3, 1, 1, 4], expected: 2 }, // Jump 0->1->4
  { nums: [1, 1, 1, 1], expected: 3 }, // Jump 0->1->2->3
  { nums: [6, 2, 4, 0, 5, 1, 1, 4, 2, 9], expected: 2 }, // Jump 0->4->9
  { nums: [1], expected: 0 }, // No jumps needed
  { nums: [3, 2, 1], expected: 1 }, // Single jump to the last index
];

for (let i = 0; i < testCases.length; i++) {
  const { nums, expected } = testCases[i];
  const result = jump(nums);
  console.log(`Input: nums = ${JSON.stringify(nums)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
