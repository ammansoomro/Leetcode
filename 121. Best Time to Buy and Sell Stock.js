/* You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0. */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let minPrice = Infinity;
  let n = prices.length;
  for (let i = 0; i < n; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    max = Math.max(max, prices[i] - minPrice);
  }
  return max;
};

const testCases = [
  { prices: [7, 1, 5, 3, 6, 4], expected: 5 },
  { prices: [7, 6, 4, 3, 1], expected: 0 },
  { prices: [2, 4, 1], expected: 2 },
  { prices: [3, 2, 6, 5, 0, 3], expected: 4 },
  { prices: [1, 2, 3, 4, 5], expected: 4 },
];

for (let i = 0; i < testCases.length; i++) {
  const { prices, expected } = testCases[i];
  const result = maxProfit(prices);
  console.log(`Input: prices = ${JSON.stringify(prices)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
