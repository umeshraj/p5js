/// <reference path="./p5d/p5.global-mode.d.ts" />

let bubble1;
let bubble2;

function setup(){
  createCanvas(400, 300);
  bubble1 = new Bubble(100, 100, 10);
  bubble2 = new Bubble(200, 200, 20);
}

function draw(){
  background(51);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}


class Bubble{

  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show(){
    fill(255);
    ellipse(this.x ,this.y, this.r*2);
  }


}