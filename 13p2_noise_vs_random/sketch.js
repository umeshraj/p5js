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
  // var x = map(noise(xoff1), 0, 1, 0, width);
  // var y = map(noise(xoff2), 0, 1, 0, height);

  // xoff1 += 0.01;
  // xoff2 += 0.01;
  // ellipse(x, y, 24, 24);

  let xoff = start;
  beginShape();
  for (var x=0; x<width; x++){
    stroke(255);
    // y = random(height);
    y = noise(xoff) * height;
    vertex(x, y);
    xoff += incr;
  }
  endShape();
  start += incr;

  // noLoop();
}
