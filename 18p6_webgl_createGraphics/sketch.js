/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(0);
  ambientLight(100);
  directionalLight(255, 255, 255, 1, -1, 0);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  box(100);

  angle += 0.03;
}
