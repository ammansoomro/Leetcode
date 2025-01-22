const sumWithoutIndex = (nums) => {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(sumWithoutIndex([1, 2, 4, 5]));
