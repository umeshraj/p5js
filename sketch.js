let x=0;
let timer;
let timer2;
let interval;
var button;

function setup() {
  createCanvas(200, 200);
  timer = createP("Timer");
  timer2 = createP("Timer2");
  makeTimer(timer, 500);
  makeTimer(timer2, 1000);
}

function makeTimer(elt, waitTime){
  let counter = 0;
  setInterval(timeIt, waitTime);

  function timeIt(){
    elt.html(counter);
    counter++;
  }
}

function timeIt(){
  timer.html(counter);
  timer2.html(counter);
  counter++;
}

function draw(){
  background(51);
  stroke(255);
  line(x, 0, x, height);

  x += 3;
  if (x>width){
    x = 0;
  }
}
