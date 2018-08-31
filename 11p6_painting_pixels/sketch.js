let video;
let vscale = 16;
let particle;

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width/scale, height/scale);
  particle = new Particle(width/2, height/2);
  background(51);
}

function draw(){
  video.loadPixels();
  particle.update();
  particle.show();
}
