/// <reference path="./p5d/p5.global-mode.d.ts" />

vals = [5, 4, 9, 2, 1]

function isEven(num){
  return (num % 2 == 0)
}

let valsEven = vals.filter(isEven);
console.log("Filter with fn: " + valsEven);

// Arrow function
let valsEvenArrow = vals.filter(x => x%2 ==0);
console.log("Filter with arrow: " + valsEvenArrow);

// String filtering
let string = "It was a dark  night."
let  words = string.split(" ");
console.log("array has empty space:");
console.log(words);

let wordsNonEmpty = string.split(" ").filter(s => s.length > 0);
console.log("array has no empty spaces: ");
console.log(wordsNonEmpty);