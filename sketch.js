let song1;
let angle=0;

function preload(){
  song1 = loadSound('audio/yummy.mp3');
}

function setup(){
  createCanvas(300, 300);
  console.log(floor(millis()) + 'ms');
}

function draw(){
  background(51);

  translate(width/2, height/2);
  rotate(angle);
  strokeWeight(4);
  stroke(255);
  line(0, 0, 100, 0);
  angle += 0.1;
}
