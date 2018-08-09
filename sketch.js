let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(width/2, height/2);
  rotate(angle);

  stroke(255);
  line(0, 0, 50, 50);
  fill(255)
  rect(50, 50, 100, 50);
  angle+=1;
}
