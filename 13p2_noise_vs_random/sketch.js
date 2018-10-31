// let xoff1 = 0;
// let xoff2 = 10000;
let incr = 0.01;
let start = 0;
function setup(){
  createCanvas(400, 400);
}

function draw(){
  background(51);
  stroke(255);
  noFill();

  let xoff = start;
  beginShape();
  for (var x=0; x<width; x++){
    var n = map(noise(xoff), 0, 1, -50, 50);
    var s = map(sin(xoff), -1, 1, 0, height);
    var y = n + s;
    stroke(255);
    // y = random(height);
    // y = noise(xoff) * height;
    vertex(x, y);
    xoff += incr;
  }
  endShape();
  start += incr;

  // noLoop();
}
