const getNthElement = (index, array) => { 

  let buse;
  if(index > (array.length -1)) {
    (buse = index % array.length)
    return array[buse]
  } else{
    return array[index]
  }
  //const newIndex = index < array.length ? index : index - array.length;
  //return array[newIndex];
  // your code here
};

function arrayToCSVString(array) {
  return array.toString();
}

const csvStringToArray = string => {
  let noCommas = string.replace(/,/g,"")
  return noCommas.split("")
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array2 = [...array, element];
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => string.split("").reverse().join(""));
};

const onlyEven = numbers => {
  return numbers.filter(x => x%2 == 0);
};

const removeNthElement2 = (index, array) => {
  let newArray = array.map(x => x)
    newArray.splice(index, 1);
    return newArray;
};

const elementsStartingWithAVowel = strings => {
  const xx = ["a", "e", "i", "o", "u"];
  return strings.filter(word => {
    const firstLetter = word[0].toLowerCase();
    return xx.includes(firstLetter);
  });
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce(
    (acc, number) => {
      return acc + number;
    });
};

const sortByLastLetter = strings => {
  const reverseString = (item) => item.split('').reverse().join('');
  return strings.map(reverseString).sort().map(reverseString)
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
