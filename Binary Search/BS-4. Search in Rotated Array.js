/* Description: Search in Rotated Sorted Array
Given a rotated sorted array of unique integers and a target value, return the index of the target if it exists, otherwise return -1.

A rotated sorted array is an array that was initially sorted in ascending order but was rotated at some pivot. The goal is to find the target in O(log n) time complexity.

Example Scenarios
Example 1:
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Explanation: The target 0 is found at index 4.

Example 2:
Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Explanation: The target 3 is not present in the array.

Example 3:
Input: nums = [1], target = 0
Output: -1
Explanation: The array contains only one element 1, and the target 0 is not found. */

var searchInRotatedArray = (nums, target) => {
  let start = 0,
    end = nums.length - 1;
  while (start <= end) {Input: nums = [4,5,6,7,0,1,2], target = 0
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
  {
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 0,
    expected: 4,
  }, // Target exists in rotated part
  {
    nums: [4, 5, 6, 7, 0, 1, 2],
    target: 3,
    expected: -1,
  }, // Target not in array
  {
    nums: [1],
    target: 0,
    expected: -1,
  }, // Single element, not present
  {
    nums: [1],
    target: 1,
    expected: 0,
  }, // Single element, present
  {
    nums: [6, 7, 8, 1, 2, 3, 4, 5],
    target: 3,
    expected: 5,
  }, // Target in the second half
  {
    nums: [6, 7, 8, 1, 2, 3, 4, 5],
    target: 6,
    expected: 0,
  }, // Target at first index
  {
    nums: [6, 7, 8, 1, 2, 3, 4, 5],
    target: 5,
    expected: 7,
  }, // Target at last index
  {
    nums: [3, 4, 5, 6, 7, 8, 9, 1, 2],
    target: 9,
    expected: 6,
  }, // Target at the pivot
  {
    nums: [1, 2, 3, 4, 5, 6, 7],
    target: 5,
    expected: 4,
  }, // Already sorted (no rotation)
];

// Run test cases
testCases.forEach((testCase, index) => {
  const { nums, target, expected } = testCase;
  const result = searchInRotatedArray(nums, target);
  console.log(`Test Case ${index + 1}`);
  console.log(`Input: nums = ${nums}, target = ${target}`);
  console.log(`Expected: ${expected}`);
  console.log(`Output: ${result}`);
  console.log(`Pass: ${result === expected}`);
  console.log("---");
});
