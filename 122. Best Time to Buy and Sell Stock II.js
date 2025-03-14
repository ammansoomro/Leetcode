/* You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0. */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }
  return maxProfit;
};

const testCases = [
  { prices: [7, 1, 5, 3, 6, 4], expected: 7 },
  { prices: [1, 2, 3, 4, 5], expected: 4 },
  { prices: [7, 6, 4, 3, 1], expected: 0 },
  { prices: [1, 2, 1, 2, 1, 2], expected: 3 },
  { prices: [3, 2, 6, 5, 0, 3], expected: 7 },
];

for (let i = 0; i < testCases.length; i++) {
  const { prices, expected } = testCases[i];
  const result = maxProfit(prices);
  console.log(`Input: prices = ${JSON.stringify(prices)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
