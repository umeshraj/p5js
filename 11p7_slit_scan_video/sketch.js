let video;
let x = 0;

function setup(){
  createCanvas(300, 240);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(320, 240);
}

function draw(){
  // background(51);
  video.loadPixels()
  // image(video, 0, 0)
  let w = video.width;
  let h = video.height;
  copy(video, w/2, 0, 1, h, x, 0, 1, h);
  x = (x+1)%width;
}
