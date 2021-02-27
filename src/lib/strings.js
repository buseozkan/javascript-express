const sayHello = string => {
return 'Hello, ' + string + '!';
console.log(sayHello());

};

const uppercase = string => {
 let x = string.toUpperCase();
 return x;
 console.log(x);
  // your code here
};

const lowercase = string => {
  let x = string.toLowerCase();
  return x;
  console.log(x);
  // your code here
};

const countCharacters = string => {
  let x = string.length;
  return x;
  console.log(x);
  // your code here
};

const firstCharacter = string => {
let x = string.charAt(0);
return x;
console.log(x);
  // your code here

};

const firstCharacters = (string, n) => {
let x = string.substring(0,n);
return x;
console.log(x);
// your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
