const negate = a => {
  if (a === true) {
    x = false
  } 
  else (x = true);
  return x;
  // your code here
};

const both = (a, b) => {
  let x = '';
  if (a === true && b === true) {
    x = true} else {
      x = false};
  
  return x;
  // your code here
};

const either = (a, b) => {
  let x = '';
  if (a === true && b === true){
    x = true;
  }
  else if (a === true && b === false){
    x = true;
  } else if (a === false && b === true){
    x = true;
  }else if(a === false && b === false){
    x = false;
  }
  else {
    alert = 'Invalid';
  
  }
  return x;
  
  // your code here
};

const none = (a, b) => {
  let x = '';
  if (a === true && b === true){
    x = false;
  }
  else if (a === true && b === false){
    x = false;
  } else if (a === false && b === true){
    x = false;
  }else if(a === false && b === false){
    x = true;
  }
  else {
    alert = 'Invalid';
  
  }
  return x;
  
  
  // your code here
};

const one = (a, b) => {
  let x = '';
  if (a === true && b === true){
    x = false;
  } else if (a === true && b === false){
    x = true;
  } else if (a === false && b === true){
    x = true;
  }else if(a === false && b === false){
    x = false;
  }
  { alert = 'Invalid';}
  return x;
  
  // your code here
};

const truthiness = a => {
  return !!a
  // your code here
};

const isEqual = (a, b) => {
  if (a === b){
    x = true;
  } else {x = false;
  }
  return x;
  // your code here
};

const isGreaterThan = (a, b) => {
  if (a > b){
    x = true;
  }else {x = false;}
  return x;
  // your code here
};

const isLessThanOrEqualTo = (a, b) => {
 if (a <= b){
   x = true;
 }else {x = false;}
 return x;
 
 
  // your code here
};

const isOdd = a => {
  if (a%2 === 0){
    x = false;
  }
  else {
    x = true;
  }
  return x;
  // your code here
};

const isEven = a => {
 if (a%2 === 0){
   x = true;
 }else {
   x = false;
 }
 return x;
  // your code here
};

const isSquare = a => {
  if (Number.isInteger(Math.sqrt(a))) {x = true;} else {x=false;}
  return x
};
  // your code here

const startsWith = (char, string) => {
  if (string.charAt(0) === char) {x = true;} else {x=false;}
  return x
};
  // your code here

const containsVowels = string => {
  return string
  .split("")
  .some(letter => ["a", "e", "i", "o", "u"].includes(letter.toLowerCase()));
};

const isLowerCase = string => {
  return string === string.toLowerCase();
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
