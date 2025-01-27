/* Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
  */

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (
    this.minStack.length === 0 ||
    val <= this.minStack[this.minStack.length - 1]
  ) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popped = this.stack.pop();

  if (popped === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const testCases = [
  {
    actions: [
      "MinStack",
      "push",
      "push",
      "push",
      "getMin",
      "pop",
      "top",
      "getMin",
    ],
    values: [[], [-2], [0], [-3], [], [], [], []],
    expected: [null, null, null, null, -3, null, 0, -2],
  }, // Example 1: Standard operations with minimum tracking
  {
    actions: ["MinStack", "push", "push", "push", "getMin", "pop", "getMin"],
    values: [[], [5], [3], [8], [], [], []],
    expected: [null, null, null, null, 3, null, 3],
  }, // Push elements, pop, and check minimum
  {
    actions: [
      "MinStack",
      "push",
      "push",
      "push",
      "getMin",
      "pop",
      "pop",
      "getMin",
    ],
    values: [[], [2], [1], [3], [], [], [], []],
    expected: [null, null, null, null, 1, null, null, 2],
  }, // Push, pop multiple times, and check minimum
  {
    actions: ["MinStack", "push", "getMin", "push", "getMin", "pop", "getMin"],
    values: [[], [10], [], [5], [], [], []],
    expected: [null, null, 10, null, 5, null, 10],
  }, // Check minimum after each operation
  {
    actions: [
      "MinStack",
      "push",
      "push",
      "getMin",
      "pop",
      "getMin",
      "pop",
      "getMin",
    ],
    values: [[], [1], [2], [], [], [], [], []],
    expected: [null, null, null, 1, null, 1, null, null],
  }, // Minimum changes as stack becomes empty
  {
    actions: [
      "MinStack",
      "push",
      "push",
      "push",
      "pop",
      "pop",
      "pop",
      "getMin",
    ],
    values: [[], [3], [2], [1], [], [], [], []],
    expected: [null, null, null, null, null, null, null, null],
  }, // Popping all elements and checking minimum on empty stack
  {
    actions: [
      "MinStack",
      "push",
      "push",
      "push",
      "push",
      "getMin",
      "pop",
      "getMin",
      "pop",
      "getMin",
    ],
    values: [[], [1], [2], [3], [-1], [], [], [], [], []],
    expected: [null, null, null, null, null, -1, null, 1, null, 1],
  }, // Complex scenario with pushing and popping multiple times
];

testCases.forEach((testCase, i) => {
  const { actions, values, expected } = testCase;
  const minStack = new MinStack();
  console.log(`Test Case ${i + 1}`);
  const results = actions.map((action, index) => {
    const value = values[index];
    if (action === "MinStack") return null;
    if (action === "push") return minStack.push(value[0]);
    if (action === "pop") return minStack.pop();
    if (action === "top") return minStack.top();
    if (action === "getMin") return minStack.getMin();
  });
  console.log(`Actions: ${actions}`);
  console.log(`Expected: ${expected}`);
  console.log(`Output: ${results}`);
  console.log("---");
});
