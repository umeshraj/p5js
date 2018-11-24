/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(51);

  rectMode(CENTER);

  noStroke();
  fill(0, 0, 255);
  rotateZ(angle);
  rotateY(angle * 0.3);
  rotateX(angle * 0.7);
  rect(0, 0, 150, 100);

  angle += 0.07;
}
