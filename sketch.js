let x;
let y;
function setup(){
  createCanvas(640, 480);
  background(200);

  x = width/2;
  y = height/2;
}

function draw(){
  fill(255, 0, 100, 10);
  noStroke();
  ellipse(x, y, 30, 30);
  x = x + random(-10, 10);
  y = y + random(-10, 10);
}
