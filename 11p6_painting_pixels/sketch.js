let video;
let vscale = 16;
let particle;

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width/vscale, height/vscale);
  particle = new Particle(0/2, 0/2);
  background(51);
}

function draw(){
  video.loadPixels();
  particle.update();
  particle.show();
}
