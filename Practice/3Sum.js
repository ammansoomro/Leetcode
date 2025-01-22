/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    left = i + 1;
    right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) continue;
        while (left < right && nums[right] === nums[right + 1]) continue;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
