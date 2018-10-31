let incr = 0.01;

function setup(){
  createCanvas(200, 200);
}

function draw(){
  loadPixels();
  for (var x=0; x<width; x++){
    for (var y=0; y<height; y++){
      var index = (x + y * width) * 4;
      pixels[index+0] = 255;
      pixels[index+1] = 0;
      pixels[index+2] = 0;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
