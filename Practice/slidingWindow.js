// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */

// const removeElement = (map, element) => {
//   if (map[element]) {
//     map[element]--;
//     if (map[element] === 0) {
//       delete map[element];
//     }
//   }
// };

// const addElement = (map, element) => {
//   map[element] = (map[element] || 0) + 1;
// };

// const getSum = (map, currentMax) => {
//   if (Object.keys(map).length === 3) {
//     const sum = Object.keys(map).reduce((sum, value) => sum + Number(value), 0);
//     return Math.max(sum, currentMax);
//   }
//   return currentMax;
// };

// const getDistinct = (map) => {
//   return Object.keys(map).length;
// };

// var maximumSubarraySum = function (nums, k) {
//   let maxSum = 0;
//   let map = {};
//   let result = [];
//   for (let i = 0; i < k; i++) {
//     map[nums[i]] = (map[nums[i]] || 0) + 1;
//   }

//   maxSum = getSum(map, maxSum);

//   for (let end = 1; end < nums.length - k; end++) {
//     let remove = nums[end - 1];
//     let add = nums[end + k - 1];
//     removeElement(map, remove);
//     map[add] = (map[add] || 0) + 1;
//     maxSum = getSum(map, maxSum);
//   }
//   return maxSum;
// };

// var getDistinctinSubArray = function (nums, k) {
//   let map = {};
//   let result = [];

//   for (let i = 0; i < k; i++) {
//     addElement(map, nums[i]);
//   }

//   result.push(getDistinct(map));

//   for (let end = 1; end < nums.length - k; end++) {
//         removeElement(map, nums[end - 1]);
//         addElement(map, nums[end + k - 1]);
//     result.push(getDistinct(map));
//   }
//   return result;
// };

// // console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9, 12, 12, 12], 3));
// // console.log(getDistinctinSubArray([1, 5, 4, 2, 9, 9, 9, 12, 12, 12], 3));

// const isAnagram = (map, subStringMap) => {
//   return JSON.stringify(map) === JSON.stringify(subStringMap);
// };
// const findAnagram = (string, subString) => {
//   let map = {};
//   let subStringMap = {};
//   let result = [];
//   let start = 0;

//   subString.split("").map((char) => {
//     subStringMap[char] = (subStringMap[char] || 0) + 1;
//   });

//   for (let i = 0; i < subString.length; i++) {
//     let add = subString[i];
//     addElement(map, add);
//   }

//   for (let end = 1; end < string.length; end++) {
//     if (isAnagram(map, subStringMap)) {
//       result.push(start);
//     }

//     let add = string[end + subString.length - 1];
//     let remove = string[end - 1];
//     addElement(map, add);
//     removeElement(map, remove);
//     start++;
//   }
//   if (isAnagram(map, subStringMap)) {
//     result.push(start);
//   }
//   return result;
// };

const firstNegative = (nums, k) => {
  let result = [];
  let negatives = [];
  let start = 0,
    end = 0,
    len = nums.length;
  while (end < len) {
    if (nums[end] < 0) {
      negatives.push(nums[end]);
    }
    if (end - start + 1 === k) {
      if (negatives.length === 0) {
        result.push(0);
      } else {
        result.push(negatives[0]);
        if (nums[start] === negatives[0]) {
          negatives.shift();
        }
        start++;
      }
    }
    end++;
  }
  return result;
};

const maxSumOfSubArray = (nums, k) => {
  let maxSum = 0,
    start = 0,
    end = 0,
    len = nums.length,
    sum = 0;

  while (end < len) {
    sum += nums[end];
    if (end - start + 1 === k) {
      maxSum = Math.max(maxSum, sum);
      sum += -nums[start];
      start++;
    }
    end++;
  }
  return maxSum;
};

console.log(firstNegative([12, -1, -7, 8, -15, 30, 16, 28], 3));
console.log(maxSumOfSubArray([1, 2, 5, 10, 3, 5, 2, 6, 1], 5));
