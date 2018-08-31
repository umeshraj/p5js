let video;
let vscale = 16;
let particles = [];

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width/vscale, height/vscale);
  for (let idx=0; idx<100; idx++){
    particles[idx] = new Particle(width/2, height/2);
  }
  background(51);
}

function draw(){
  video.loadPixels();
  for (let particle of particles){
    particle.update();
    particle.show();    
  }
}
