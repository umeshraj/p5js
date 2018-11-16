/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  noCanvas();
  delay(1000);
}

function delay(time){
  setTimeout(sayHello, time);
}

function sayHello(){
  createP('Hello!'); 
}