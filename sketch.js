let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw(){
  background(0);
  translate(100, 100);
  rotate(angle);

  // rect1
  fill(255, 100, 50);
  rect(0, 0, 100, 50);

  //rect2
  fill(50, 100, 255);
  rect(50, 50, 20, 20);

  angle+=5;
}
