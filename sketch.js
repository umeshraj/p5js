let angle = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw(){
  background(0);
  translate(width/2, height/2);
  rotate(angle);

  fill(255)
  rect(0, 0, 100, 50);
  angle+=1;
}
