/* Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  nums.sort((a, b) => a - b);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i - 1] === nums[i]) {
      count++;
    } else {
      count = 1;
    }
    if (count > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
};

const testCases = [
  { nums: [3, 2, 3], expected: 3 },
  { nums: [2, 2, 1, 1, 1, 2, 2], expected: 2 },
  { nums: [1, 1, 1, 2, 2, 2, 2], expected: 2 },
  { nums: [5, 5, 5, 5, 1, 2, 3], expected: 5 },
  { nums: [7], expected: 7 },
];

for (let i = 0; i < testCases.length; i++) {
  const { nums, expected } = testCases[i];
  const result = majorityElement(nums);
  console.log(`Input: nums = ${JSON.stringify(nums)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
