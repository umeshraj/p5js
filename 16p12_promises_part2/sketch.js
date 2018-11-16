/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  noCanvas();
  setTimeout(sayHello, 1000);
}


function sayHello(){
  createP('Hello!'); 
}