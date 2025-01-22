/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let maxStreak = 0;

  for (let num of numSet) {
    if (!numSet.has(num-1)) {
      let currentNum = num;
      let currentStreak = 1;
      while (numSet.has(currentNum + 1)) {
        currentStreak++;
        currentNum++;
      }

      maxStreak = Math.max(maxStreak, currentStreak);
    }
  }
  return maxStreak;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
