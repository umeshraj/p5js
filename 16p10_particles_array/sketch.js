/// <reference path="./p5d/p5.global-mode.d.ts" />

let particles = [];

function setup(){
  createCanvas(600, 400);
  p = new Particle();
  particles.push(p);
}

function draw(){
  background(51);
  for (particle of particles){
    p.show();
  }
}

class Particle{
  constructor(){
    this.x = 300;
    this.y = 380;
  }

  show(){
    stroke(255);
    fill(255, 10);
    ellipse(this.x, this.y, 16);
  }
}
