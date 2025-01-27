/* Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]
Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]
Example 3:

Input: temperatures = [30,60,90]
Output: [1,1,0] */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let stack = [];
  let result = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i];
    while (stack.length > 0 && t > stack[stack.length - 1].temp) {
      const { temp, index } = stack.pop();
      result[index] = i - index;
    }
    stack.push({ temp: temperatures[i], index: i });
  }
  return result;
};

const testCases = [
  {
    temperatures: [73, 74, 75, 71, 69, 72, 76, 73],
    expected: [1, 1, 4, 2, 1, 1, 0, 0],
  }, // Example 1: Normal sequence with varying temperatures
  {
    temperatures: [30, 40, 50, 60],
    expected: [1, 1, 1, 0],
  }, // Example 2: Increasing temperatures
  {
    temperatures: [30, 60, 90],
    expected: [1, 1, 0],
  }, // Example 3: Strictly increasing temperatures
  {
    temperatures: [90, 80, 70, 60],
    expected: [0, 0, 0, 0],
  }, // All decreasing temperatures, no warmer days
  {
    temperatures: [70, 70, 70, 70],
    expected: [0, 0, 0, 0],
  }, // Constant temperatures, no warmer days
  {
    temperatures: [50, 60, 50, 60, 50, 60],
    expected: [1, 0, 1, 0, 1, 0],
  }, // Alternating higher and lower temperatures
  {
    temperatures: [60, 70, 80, 70, 60, 50],
    expected: [1, 1, 0, 0, 0, 0],
  }, // Mixed case with increasing and decreasing sections
  {
    temperatures: [50],
    expected: [0],
  }, // Single temperature, no future days
  {
    temperatures: [60, 61, 62, 62, 61, 60],
    expected: [1, 1, 0, 0, 0, 0],
  }, // Repeated temperatures with later decrease
];

for (let i = 0; i < testCases.length; i++) {
  const { temperatures, expected } = testCases[i];
  const result = dailyTemperatures(temperatures);
  console.log(`Input: temperatures = ${JSON.stringify(temperatures)}`);
  console.log(`Output: ${JSON.stringify(result)}`);
  console.log(`Expected: ${JSON.stringify(expected)}`);
  console.log("---");
}
