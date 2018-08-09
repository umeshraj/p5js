let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw(){
  background(0);
  push();
  translate(100, 100);
  rotate(angle);

  // rect1
  fill(255, 100, 50);
  rect(0, 0, 100, 50);
  pop();

  //rect2
  fill(50, 100, 255);
  rect(300, 300, 100, 50);

  angle+=5;
}
