/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  noCanvas();
  delay(1000)
    .then(() => createP("Hello, world!"))
    .catch((err) => console.error(err));
}

function delay(time){
  // setTimeout(sayHello, time);

  return new Promise((resolve, reject) => {
    if (isNaN(time)){
      reject(new Error('delay requires a number'));
    }
    setTimeout(resolve, time);
  });
}

function sayHello(){
  createP('Hello!'); 
}