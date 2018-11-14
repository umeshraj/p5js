/// <reference path="./p5d/p5.global-mode.d.ts" />

let particles = [];

function setup(){
  createCanvas(600, 400);
  particles = new Array(100).fill(null).map(p=>new Particle());
}

function draw(){
  background(51);
  for (let i=0; i<5; i++){
    p = new Particle();
    particles.push(p);  
  }

  for (let particle of particles){
    particle.update();
    particle.show();
  }

  particles = particles.filter(p => !p.finished());

  // for (let i=particles.length-1; i>=0; i--){    
  //   particles[i].update();
  //   particles[i].show();
  //   if (particles[i].finished()){
  //     particles.splice(i, 1);
  //   }
  // }
}

class Particle{
  constructor(){
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  show(){
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 16);
  }

  update(){
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  finished(){
    return this.alpha < 0;
  }
}
