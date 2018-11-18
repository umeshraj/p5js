/// <reference path="./p5d/p5.global-mode.d.ts" />

let bubble;

function setup(){
  createCanvas(400, 300);
  bubble = new Bubble();
  print(bubble.x, bubble.y);
}

function draw(){
  background(51);
  bubble.move();
  bubble.show();
}


class Bubble{

  constructor(){
    this.x = 100;
    this.y = 100;
  }

  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show(){
    fill(255);
    ellipse(this.x ,this.y, 24, 24);
  }


}