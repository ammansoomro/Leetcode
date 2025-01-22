const findTarget = (data, target) => {
  let left = 0,
    right = data.length - 1;
  data.sort((a, b) => a - b);
  while (left <= right) {
    const sum = data[left] + data[right];
    if (sum === target) {
      return [data[left], data[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
};

console.log(
  findTarget([12, 42, 63, 14, 63, 45, 42, 1, 16, 3, 5, 4, 25, 6, 3, 5, 4], 20)
);
