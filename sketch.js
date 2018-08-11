let x=0;
let timer;
let counter=0;
let interval;
var button;

function setup() {
  createCanvas(200, 200);
  timer = createP("Timer");
  button = createButton('Start timer');
  button.mousePressed(startTimer);
}

function startTimer(){
  interval = setInterval(timeIt, 500);
  button.html('Stop timer');
  button.mousePressed(stopTimer);
}

function stopTimer(){
  clearInterval(interval);
  button.html('Start timer');
  button.mousePressed(startTimer);
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
