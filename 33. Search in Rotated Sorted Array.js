/*  There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

const testCases = [
  // Example test cases
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 }, // Target in right half
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 }, // Target not present
  { nums: [1], target: 0, expected: -1 }, // Single element, target not present

  // Edge cases
  { nums: [1], target: 1, expected: 0 }, // Single element, target present
  { nums: [3, 1], target: 1, expected: 1 }, // Two elements, rotated
  { nums: [3, 1], target: 3, expected: 0 }, // Two elements, rotated, target is first

  // Rotation at different points
  { nums: [6, 7, 8, 9, 1, 2, 3, 4, 5], target: 1, expected: 4 }, // Target at pivot
  { nums: [6, 7, 8, 9, 1, 2, 3, 4, 5], target: 5, expected: 8 }, // Target at the end
  { nums: [6, 7, 8, 9, 1, 2, 3, 4, 5], target: 6, expected: 0 }, // Target at the beginning
  { nums: [6, 7, 8, 9, 1, 2, 3, 4, 5], target: 9, expected: 3 }, // Target at highest element

  // Already sorted, no rotation
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 5, expected: 4 }, // Normal binary search case
  { nums: [1, 2, 3, 4, 5, 6, 7, 8, 9], target: 10, expected: -1 }, // Target not present

  // Large test case
  {
    nums: Array.from({ length: 1000 }, (_, i) => i).concat(
      Array.from({ length: 500 }, (_, i) => i - 500)
    ),
    target: -250,
    expected: 1250,
  }, // Large rotated array with negative numbers
];

testCases.forEach(({ nums, target, expected }, index) => {
  const result = search(nums, target);

  console.log(
    `Test Case ${index + 1}: ${result === expected ? "Passed" : "Failed"}`
  );
});
