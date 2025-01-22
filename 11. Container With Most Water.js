/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.
Notice that you may not slant the container. 
 */

/* Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49. */

/* Example 2:
Input: height = [1,1]
Output: 1 */

const maxArea = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = (right - left) * Math.min(heights[left], heights[right]);
    maxArea = Math.max(maxArea, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
};

// Test cases
const testCases = [
  { height: [1, 8, 6, 2, 5, 4, 8, 3, 7], expected: 49 },
  { height: [1, 1], expected: 1 },
];

for (let i = 0; i < testCases.length; i++) {
  const { height, expected } = testCases[i];
  const result = maxArea(height);
  console.log(`Input: height = ${JSON.stringify(height)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
