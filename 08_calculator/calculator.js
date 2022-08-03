const add = function (num1, num2) {
  return num1 + num2
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (nums) {
  console.log(nums)
  let sum = 0;
  for (let i = 0; i < nums.length; i++)
    sum += Number(nums[i]);
  return sum;
};

const multiply = function (nums) {
  let prod = 1;
  for (let i = 0; i < nums.length; i++)
    prod *= nums[i];
  return prod;
};

const power = function (base, pow) {
  let result = 1;
  if(pow==0)
    return result;
  for(let i = 0; i < pow; i++)
    result *= base;
  return result;
};

const factorial = function (num) {
  let result = 1;
  for (let i = 1; i <= num; i++)
    result*=i;
  return result;
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
