let video;
let vScale = 16;

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
}

function draw(){
  background(51);
  video.loadPixels();
  // loadPixels();
  for (let y=0; y<video.height; y++){
    for (let x=0; x<video.width; x++){
        let idx = (video.width-x+1+ (y*video.width) ) * 4;
        let r = video.pixels[idx+0];
        let g = video.pixels[idx+1];
        let b = video.pixels[idx+2];

        let bright = (r+g+b)/3;
        let w = map(bright, 0, 255, 0, vScale);
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(x*vScale, y*vScale, w, w);
    }
  }
  // updatePixels();
}
