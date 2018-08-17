let graphics;
let x = 50;
let y = 50;

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
  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 8, 8);
}
