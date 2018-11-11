/// <reference path="./p5d/p5.global-mode.d.ts" />

let vals = [4, 8, 1, 2, 9];
console.log(vals);


function doubler(x){
  return x*2;
}

let doubled = vals.map(doubler)
console.log(doubled);