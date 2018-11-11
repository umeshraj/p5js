/// <reference path="./p5.global-mode.d.ts" />

let bubbles = [];
function setup(){
  createCanvas(400, 300);
}

function mouseDragged(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw(){
  background(51);
  for (let bubble of bubbles){
    bubble.move();
    bubble.show();
  }
}

class Bubble{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  move(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  show(){
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }

}
