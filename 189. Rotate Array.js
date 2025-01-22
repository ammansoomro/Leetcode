/* Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100] */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const swap = (nums, l, r) => {
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
};

var rotate = function (nums, k) {
  let n = nums.length;

  if (n <= 1) return;

  k = k % n;

  swap(nums, 0, n - k - 1);
  swap(nums, n - k, n - 1);
  swap(nums, 0, n - 1);
};

const testCases = [
  { nums: [1, 2, 3, 4, 5, 6, 7], k: 3, expected: [5, 6, 7, 1, 2, 3, 4] },
  { nums: [-1, -100, 3, 99], k: 2, expected: [3, 99, -1, -100] },
  { nums: [1, 2], k: 1, expected: [2, 1] },
  { nums: [1, 2, 3], k: 4, expected: [3, 1, 2] }, // k > nums.length
  { nums: [7], k: 5, expected: [7] }, // Single element
];

for (let i = 0; i < testCases.length; i++) {
  const { nums, k, expected } = testCases[i];
  console.log(
    `Input: nums = ${JSON.stringify(nums.slice(0, nums.length))}, k = ${k}`
  );
  rotate(nums, k);
  console.log(`Output: ${JSON.stringify(nums)}`);
  console.log(`Expected: ${JSON.stringify(expected)}`);
  console.log("---");
}
