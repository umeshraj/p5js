let graphics;

function setup(){
  createCanvas(400, 300);
  graphics = createGraphics(400, 300);
  background(51);
}

function draw(){
  if (mouseIsPressed){
    stroke(255);
    fill(255);
    ellipse(mouseX, mouseY, 32, 32);
  }
  fill(255, 0, 255);
  ellipse(mouseX, mouseY, 8, 8);
}
