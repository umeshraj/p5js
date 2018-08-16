function setup(){
  createCanvas(400, 300);
  angleMode(DEGREES);
}

function draw(){
  background(51);
  let x = 100;
  let y = 200;
  stroke(255);
  strokeWeight(10);
  point(x, y);

  let angle = -45;
  let r = 100; // 100 pixels away
  dx = r * cos(angle);
  dy = r * sin(angle);
  stroke('red');
  point(x+dx, y+dy);
  strokeWeight(2);
  line(x, y, x+dx, y+dy);
}
