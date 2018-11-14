/// <reference path="./p5d/p5.global-mode.d.ts" />

let particles = [];

function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(51);
  p = new Particle();
  particles.push(p);

  for (particle of particles){
    particle.update();
    particle.show();
  }
}

class Particle{
  constructor(){
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = (-5, -1);
  }

  show(){
    stroke(255);
    fill(255, 10);
    ellipse(this.x, this.y, 16);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
}
