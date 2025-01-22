const binarySearch = (data, target) => {
  let left = 0,
    right = data.length - 1;

  while (left <= right) {
    mid = left + Math.floor((right - left) / 2);
    if (data[mid] === target) {
      return mid;
    } else if (data[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(
  binarySearch([10, 14, 26, 37, 38, 48, 52, 64, 75, 83, 94, 142], 35)
);
