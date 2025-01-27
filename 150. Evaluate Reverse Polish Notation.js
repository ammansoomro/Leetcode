/* You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (!["+", "-", "*", "/"].includes(token)) {
      stack.push(Number(token));
    } else {
      const num1 = stack.pop();
      const num2 = stack.pop();

      let result;
      switch (token) {
        case "+":
          result = num2 + num1;
          break;
        case "-":
          result = num2 - num1;
          break;
        case "*":
          result = num2 * num1;
          break;
        case "/":
          result = Math.trunc(num2 / num1);
          break;
      }
      stack.push(result);
    }
  }

  return stack.pop(); 
};

const testCases = [
  { tokens: ["2", "1", "+", "3", "*"], expected: 9 }, // ((2 + 1) * 3) = 9
  { tokens: ["4", "13", "5", "/", "+"], expected: 6 }, // (4 + (13 / 5)) = 6
  {
    tokens: [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ],
    expected: 22,
  }, // ((10 * (6 / ((9 + 3) * -11))) + 17) + 5 = 22
  { tokens: ["3", "4", "+", "2", "*", "7", "/"], expected: 2 }, // (((3 + 4) * 2) / 7) = 2
  { tokens: ["5", "1", "2", "+", "4", "*", "+", "3", "-"], expected: 14 }, // ((5 + ((1 + 2) * 4)) - 3) = 14
  { tokens: ["2", "3", "*", "4", "+"], expected: 10 }, // (2 * 3) + 4 = 10
  { tokens: ["100", "200", "+", "2", "/"], expected: 150 }, // (100 + 200) / 2 = 150
  { tokens: ["2"], expected: 2 }, // Single number, result is 2
  { tokens: ["0", "3", "/"], expected: 0 }, // Division of 0 by any number = 0
  { tokens: ["-2", "3", "*", "4", "+"], expected: -2 }, // (-2 * 3) + 4 = -2
];

for (let i = 0; i < testCases.length; i++) {
  const { tokens, expected } = testCases[i];
  const result = evalRPN(tokens);
  console.log(`Input: tokens = ${JSON.stringify(tokens)}`);
  console.log(`Output: ${result}`);
  console.log(`Expected: ${expected}`);
  console.log("---");
}
