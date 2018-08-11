let x=0;
let timer;
let counter=0;
let interval;

function setup() {
  createCanvas(200, 200);
  timer = createP("Timer");
  interval = setInterval(timeIt, 500);
}

function mousePressed(){
  clearInterval(interval);
}

function timeIt(){
  timer.html(counter);
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
