/* Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1] */

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
var upperBound = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let answer = nums.length;
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] > target) {
      answer = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let starting = lowerBound(nums, target);
  let ending = upperBound(nums, target);
  if (starting === nums.length || nums[starting] !== target) {
    return [-1, -1];
  } else {
    return [starting, ending - 1];
  }
};

const testCases = [
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 8,
    expected: [3, 4],
  }, // Target appears twice
  {
    nums: [5, 7, 7, 8, 8, 10],
    target: 6,
    expected: [-1, -1],
  }, // Target does not exist in array
  {
    nums: [],
    target: 0,
    expected: [-1, -1],
  }, // Empty array case
  {
    nums: [1],
    target: 1,
    expected: [0, 0],
  }, // Single element that matches
  {
    nums: [1],
    target: 2,
    expected: [-1, -1],
  }, // Single element that does not match
  {
    nums: [2, 2, 2, 2, 2],
    target: 2,
    expected: [0, 4],
  }, // All elements are the target
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    target: 5,
    expected: [4, 4],
  }, // Target appears once in a sequential list
  {
    nums: [1, 1, 2, 2, 2, 3, 3, 4, 5],
    target: 2,
    expected: [2, 4],
  }, // Target appears multiple times in the middle
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    target: 10,
    expected: [-1, -1],
  }, // Target greater than all elements
  {
    nums: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    target: 0,
    expected: [-1, -1],
  }, // Target smaller than all elements
];

// Run test cases
testCases.forEach((testCase, index) => {
  const { nums, target, expected } = testCase;
  const result = searchRange(nums, target);
  console.log(`Test Case ${index + 1}`);
  console.log(`Input: nums = ${nums}, target = ${target}`);
  console.log(`Expected: ${expected}`);
  console.log(`Output: ${result}`);
  console.log(`Pass: ${JSON.stringify(result) === JSON.stringify(expected)}`);
  console.log("---");
});
