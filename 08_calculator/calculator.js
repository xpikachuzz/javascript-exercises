const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (nums) {
  total = 0
  for (let i = 0; i <= nums.length - 1; i++) {
    total += nums[i]
  }
  return total
};

const multiply = function (nums) {
  total = nums[0]
  for (let i = 1; i <= nums.length - 1; i++) {
    total *= nums[i]
  }
  return total
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  let total = 1
  for (let i = 1; i <= a; i++) {
    total *= i
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
