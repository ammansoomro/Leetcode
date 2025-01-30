/* Lower Bound Problem
Problem Description
Given a sorted array nums in non-decreasing order and a target value target, find the lower bound of the target in the array. The lower bound is the smallest index i such that nums[i] ≥ target. If no such index exists, return the length of the array.

This problem is typically solved using binary search in O(log n) time complexity.

Example 1
Input:
nums = [1, 2, 4, 4, 5, 6, 8], target = 4
Output: 2
Explanation: The first index where nums[i] ≥ 4 is i = 2 (value 4).

Example 2
Input:
nums = [1, 2, 4, 4, 5, 6, 8], target = 7
Output: 6
Explanation: The first index where nums[i] ≥ 7 is i = 6 (value 8).

Example 3
Input:
nums = [1, 3, 5, 7, 9], target = 10
Output: 5
Explanation: There is no element greater than or equal to 10, so we return the length of the array.

Example 4
Input:
nums = [1, 3, 5, 7, 9], target = 0
Output: 0
Explanation: The first index where nums[i] ≥ 0 is i = 0 (value 1).

Example 5
Input:
nums = [2, 2, 2, 2, 2], target = 2
Output: 0
Explanation: The first index where nums[i] ≥ 2 is i = 0 (all elements are 2).

Example 6
Input:
nums = [1, 2, 3, 4, 5], target = 6
Output: 5
Explanation: No element is ≥ 6, so return the length of the array.

Example 7
Input:
nums = [], target = 1
Output: 0
Explanation: The array is empty, so the lower bound index is 0. */

var lowerBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let answer = nums.length;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
};

const testCases = [
  {
    nums: [1, 2, 4, 4, 5, 6, 8],
    target: 4,
    expected: 2,
  }, // Target exists with duplicates
  {
    nums: [1, 2, 4, 4, 5, 6, 8],
    target: 7,
    expected: 6,
  }, // Target does not exist but has elements greater than it
  {
    nums: [1, 3, 5, 7, 9],
    target: 10,
    expected: 5,
  }, // Target is greater than all elements
  {
    nums: [1, 3, 5, 7, 9],
    target: 0,
    expected: 0,
  }, // Target is smaller than all elements
  {
    nums: [2, 2, 2, 2, 2],
    target: 2,
    expected: 0,
  }, // All elements are equal to target
  {
    nums: [1, 2, 3, 4, 5],
    target: 6,
    expected: 5,
  }, // Target is greater than all elements
  {
    nums: [],
    target: 1,
    expected: 0,
  }, // Empty array case
];

// Run test cases
testCases.forEach((testCase, index) => {
  const { nums, target, expected } = testCase;
  const result = lowerBound(nums, target);
  console.log(`Test Case ${index + 1}`);
  console.log(`Input: nums = ${nums}, target = ${target}`);
  console.log(`Expected: ${expected}`);
  console.log(`Output: ${result}`);
  console.log(`Pass: ${result === expected}`);
  console.log("---");
});
