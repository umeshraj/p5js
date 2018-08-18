let graphics;
let x = 50;
let y = 50;
let angle = 0;

function setup(){
  createCanvas(400, 300);
  imageMode(CENTER);

  graphics = createGraphics(100, 100);
  // graphics.background(51);
  graphics.fill(100);
  graphics.ellipse(50, 50, 100, 100);
}

function draw(){
  background(0);
  graphics.stroke(255);
  graphics.fill(255);
  graphics.ellipse(x, y, 5, 5);
  x += random(-5, 5);
  y += random(-5, 5);

  image(graphics, mouseX, mouseY);

  push();
  tint(0, 0, 128);
  translate(200, 200);
  rotate(angle);
  image(graphics, 0, 0);
  pop();

  angle += 0.1;

}
