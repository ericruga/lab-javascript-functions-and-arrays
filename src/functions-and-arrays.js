// Iteration #1: Find the maximum
function maxOfTwoNumbers(number1, number2) {
  if(number1 > number2){
    return number1
  }else{ (number1 < number2)
    return number2
  }
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  let theLongestWord = ""; 

  
  if (words.length === 0) {
    return null; 
  }

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > theLongestWord.length) {
      theLongestWord = words[i];
    }
  }

  return theLongestWord; 
}

// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
newNumber=0;

for (let i = 0; i < numbers.length; i++) {
if (typeof numbers[i] === "number"){
newNumber += numbers[i]
  }else if( typeof numbers[i] === "boolean"){
    newNumber += numbers[i]
  }else if( typeof numbers[i] === "string"){<
    newNumber += numbers[i]
  } else{
    throw new Error ("There's no number available!");
  }
}

return newNumber;
}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers() {
let suma = 0;
let average = 0,

for(let i = 0; i < numbersAvg.length; i++){
suma += i;
average = suma / numbersAvg.length;
}
return average;
}


// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength() { 
let strings = 0;
let average = 0;

for (let i = 0; i < wordsArr.length; i++) {
strings += wordsArr[i].length;
average = strings / wordsArr.length;
}
return average;
}


// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

let uniquifyArray = wordsUnique.filter((element, index) => {

 return wordsUnique.indexOf(element) === index;
});



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist() {}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

let count = 0;

function countStrings(array, countItem) {
  array.forEach(element => {
    if(element == countItem) count++;
  });
}
countStrings(wordsCount, 'machine');





// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
