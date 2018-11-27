/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;
let puppy;

function preload(){
  puppy = loadImage("images/puppy.jpeg");
}

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(0);
  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  translate(-50, -50);

  normalMaterial();
  texture(puppy);

  // fill(255);
  beginShape();
  vertex(0, 0, 0, 0, 0);
  vertex(100, 0, 0, 1, 0);
  vertex(100, 100, 0, 1, 1);
  vertex(0, 100, 0,  0, 1);
  endShape(CLOSE);

  // box(100);
  angle += 0.03;
}
