/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1 */

const binarySearch = (nums, low, high, target) => {
  let mid = Math.floor(low + (high - low) / 2);
  if (low > high) {
    return -1;
  } else if (nums[mid] === target) {
    return mid;
  } else if (nums[mid] > target) {
    return binarySearch(nums, low, mid - 1, target);
  } else {
    return binarySearch(nums, mid + 1, high, target);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  return binarySearch(nums, low, high, target);
};

const testCases = [
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 9,
    expected: 4,
  }, // Example 1: Target exists in the array
  {
    nums: [-1, 0, 3, 5, 9, 12],
    target: 2,
    expected: -1,
  }, // Example 2: Target does not exist in the array
  {
    nums: [1, 2, 3, 4, 5, 6],
    target: 4,
    expected: 3,
  }, // Target in the middle of the array
  {
    nums: [1, 2, 3, 4, 5, 6],
    target: 6,
    expected: 5,
  }, // Target is the last element
  {
    nums: [1, 2, 3, 4, 5, 6],
    target: 1,
    expected: 0,
  }, // Target is the first element
  {
    nums: [1],
    target: 1,
    expected: 0,
  }, // Single element array, target exists
  {
    nums: [1],
    target: 2,
    expected: -1,
  }, // Single element array, target does not exist
  {
    nums: [],
    target: 3,
    expected: -1,
  }, // Empty array
  {
    nums: [-10, -5, 0, 3, 8],
    target: -5,
    expected: 1,
  }, // Negative numbers included
  {
    nums: [-10, -5, 0, 3, 8],
    target: 7,
    expected: -1,
  }, // Target not in array with negative numbers
];

// Run test cases
testCases.forEach((testCase, index) => {
  const { nums, target, expected } = testCase;
  const result = search(nums, target);
  console.log(`Test Case ${index + 1}`);
  console.log(`Input: nums = ${nums}, target = ${target}`);
  console.log(`Expected: ${expected}`);
  console.log(`Output: ${result}`);
  console.log(`Pass: ${result === expected}`);
  console.log("---");
});
