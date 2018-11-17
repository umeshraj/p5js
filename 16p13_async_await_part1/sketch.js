/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  noCanvas();
  delayES8(1000)
    .then(() => createP("Hello, world!"))
    .catch((err) => console.error(err));
}

function delay(time){
  // setTimeout(sayHello, time);

  return new Promise((resolve, reject) => {
    if (isNaN(time)){
      reject(new Error('delay requires a number'));
    }else{
      setTimeout(resolve, time);
    }    
  });
}

async function delayES8(time){
  await delay(time);
}

function sayHello(){
  createP('Hello!'); 
}