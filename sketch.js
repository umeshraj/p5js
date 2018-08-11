let x=0;
let timer;
let timer2;
let counter=0;
let interval;
var button;

function setup() {
  createCanvas(200, 200);
  timer = createP("Timer");
  timer2 = createP("Timer2");
  setInterval(timeIt, 500);
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
