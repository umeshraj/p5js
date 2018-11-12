/// <reference path="./p5d/p5.global-mode.d.ts" />

let vals = [4, 8, 1, 2, 9];
console.log(vals);


function doubler(x){
  return x*2;
}

//  Regular call to fn
let doubled = vals.map(doubler)

// Anonymous version
let doubledAnonymous = vals.map(function (x){
  return x*2;
});

// Arrow functions
let doubleArrow = vals.map(x => x*2);

console.log("Regular: " + doubled);
console.log("Anonymous: " + doubledAnonymous)
console.log("Arrow: " + doubleArrow)