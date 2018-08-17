let graphics;

function setup(){
  createCanvas(400, 300);
  graphics = createGraphics(400, 300);
  graphics.background(51);
}

function draw(){
  if (mouseIsPressed){
    graphics.stroke(255);
    graphics.fill(255);
    graphics.ellipse(mouseX, mouseY, 32, 32);
  }
  image(graphics, 0, 0);
  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 8, 8);
}
