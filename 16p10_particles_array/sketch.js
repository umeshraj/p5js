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

  // Let's sort the particles by color before showing them
  particles.sort((a, b) => a.col-b.col);

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

  // Using reduce to compute centroids
  let sumx = particles.reduce((x, p) => x + p.x, 0);
  let sumy = particles.reduce((y, p) => y + p.y, 0);
  let centerX = sumx/particles.length;
  let centerY = sumy/particles.length;
  // show centroid
  // fill(255, 0, 0);
  // ellipse(centerX, centerY, 24, 24);


  // Computing sum with vectors
  let accV = createVector(0, 0); // accumulator vector
  let sumV = particles.reduce((v, p) => v.add(p.x, p.y), accV);
  sumV.div(particles.length);
  // show centroid
  // fill(0, 255, 0);
  // ellipse(sumV.x, sumV.y, 10, 10);
}

class Particle{
  constructor(){
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.col = random(255);
    this.alpha = 255;
  }

  show(){
    noStroke();
    fill(this.col);
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
