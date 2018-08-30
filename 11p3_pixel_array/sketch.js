function setup(){
  createCanvas(320, 240);
}

function draw(){
  background(51);
  loadPixels();
  for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
        let idx = (x +y*width) * 4;
        pixels[idx+0] = x;
        pixels[idx+1] = 0;
        pixels[idx+2] = y;
        pixels[idx+3] = 255;
    }
  }
  updatePixels();
}
