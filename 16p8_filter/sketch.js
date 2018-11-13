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