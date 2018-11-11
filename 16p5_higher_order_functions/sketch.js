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

function setup(){
  
}

function multiplier(factor){

   newFn = function(x){
    return x * factor;
  }
  return newFn;
}

