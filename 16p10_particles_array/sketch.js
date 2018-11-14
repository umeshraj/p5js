/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  createCanvas(600, 400);
  p = new Particle();

}

function draw(){
  background(51);
  p.show();
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
