let graphics;
let x = 50;
let y = 50;
let angle = 0;

function setup(){
  createCanvas(400, 300);
  graphics = createGraphics(100, 100);
  graphics.background(51);
}

function draw(){
  background(0);
  graphics.stroke(255);
  graphics.fill(255);
  graphics.ellipse(x, y, 5, 5);
  x += random(-5, 5);
  y += random(-5, 5);

  image(graphics, 0, 0);

  push();
  imageMode(CENTER);
  tint(0, 0, 128);
  translate(150, 150);
  rotate(angle);
  image(graphics, 0, 0);
  pop();

  angle += 0.1;

}
