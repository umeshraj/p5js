function setup(){
  createCanvas(320, 240);
}

function draw(){
  background(51);
  loadPixels();
  pixels[0] = 255;
  pixels[1] = 255;
  pixels[2] = 255;
  pixels[3] = 255;
  updatePixels();
}
