// let xoff1 = 0;
// let xoff2 = 10000;

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

  beginShape();
  for (var x=0; x<width; x++){
    stroke(255);
    vertex(x, random(height));
  }
  endShape();
  noLoop();
}
