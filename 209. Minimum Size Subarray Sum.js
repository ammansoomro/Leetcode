/* Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
*/

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;
    let minSize = Infinity;
    let sum = 0;
    for (let end = 0; end < nums.length; end++) {
        sum += nums[end];
        while (sum >= target) {
            minSize = Math.min(minSize, end - start + 1);
            sum -= nums[start++];
        }
    }
    return minSize === Infinity ? 0 : minSize;
};

const testCases = [
  { target: 7, nums: [2, 3, 1, 2, 4, 3], expected: 2 },
  { target: 4, nums: [1, 4, 4], expected: 1 },
  { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1], expected: 0 },
  { target: 8, nums: [1, 2, 3, 4, 5], expected: 2 },
  { target: 10, nums: [1, 1, 1, 1, 1, 1, 1, 10], expected: 1 },
  { target: 15, nums: [5, 1, 3, 4, 2, 8], expected: 4 },
  { target: 20, nums: [1, 2, 3, 4, 5], expected: 0 },
];

for (let i = 0; i < testCases.length; i++) {
  const { target, nums, expected } = testCases[i];
  const result = minSubArrayLen(target, nums);
  console.log(`Input: target = ${target}, nums = ${JSON.stringify(nums)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
