let video;

function setup(){
  let my_w = 320;
  let my_h = 240;
  createCanvas(my_w, my_h);
  video = createCapture(VIDEO);
  video.size(my_w, my_h);
}

function draw(){
  background(51);
  video.loadPixels();
  loadPixels();
  for (let y=0; y<height; y++){
    for (let x=0; x<width; x++){
        let idx = (x +y*width) * 4;
        let r = video.pixels[idx+0];
        let g = video.pixels[idx+1];
        let b = video.pixels[idx+2];

        let bright = (r+g+b)/3;
        pixels[idx+0] = bright;
        pixels[idx+1] = bright;
        pixels[idx+2] = bright;
        pixels[idx+3] = 255;
    }
  }
  updatePixels();
}
