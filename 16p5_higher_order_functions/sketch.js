/// <reference path="./p5d/p5.global-mode.d.ts" />

function sing(callback){
  console.log('la la la la');
  if (callback instanceof Function){
    callback();
  }
}

function meow(){
  console.log('meow meow');
}


function multiplier(factor){
  return x => x * factor;
}

let doubler = multiplier(2);
let tripler = multiplier(3);
console.log(doubler(5));
console.log(tripler(7));

