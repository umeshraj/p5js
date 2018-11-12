/// <reference path="./p5d/p5.global-mode.d.ts" />

let vals = [5, 4, 1, 2, 9];
console.log(vals);

// Sum the traditional way
let sum = 0;
for(let i=0; i<vals.length; i++){
  sum+=vals[i];
}
console.log("Sum w/ traditional adding is: " + sum);

// Sum with for of
sum = 0
for (let val of vals){
  sum += val;
}
console.log("Sum with for of is: " + sum);

// Doing this with reduce
function sumReduce(acc, val){
  console.log(acc);
  return acc + val;
}
let sumWithReduce = vals.reduce(sumReduce, 0);
console.log("Sum with reduce is: " + sumWithReduce);

// Arrow fn + reduce
let sumWithArrow = vals.reduce((acc, val) => acc + val, 10);
console.log("Sum with arrow+reduce+initial value: " + sumWithArrow)