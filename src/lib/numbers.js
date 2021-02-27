const add = (a, b) => {
  return a + b;
  // your code here
};

const subtract = (a, b) => {
  let x = a - b;
  return x;
  // your code here
};

const multiply = (a, b) => {
  let x = a * b;
  return x;
  // your code here
};

const divide = (a, b) => {
  let x = a / b;
  return x;
  // your code here
};

const power = (a, b) => {
 let x = Math.pow(a,b);
 return x;
  // your code here
};

const round = a => {
  let x = Math.round(a);
  return x;
  // your code here
};

const roundUp = a => {
  let x = Math.ceil(a);
  return x;
  // your code here
};

const roundDown = a => {
  let x = Math.floor(a);
  return x;
  // your code here
};

const absolute = a => {
  let x = Math.abs(a);
  return x;
  // your code here
};

const quotient = (a, b) => {
  let x = a / b ;
  let y = '';
  if (x < 0) {
    y = Math.ceil(x)}
    else {y = Math.floor(x)
  };
  return y;
  // your code here
};

const remainder = (a, b) => {
  let x = a % b ;
  return x;
  // your code here
};

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder
};
