/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;
let train;

function preload(){
  puppy = loadImage("images/puppy.jpeg");
  train = loadModel("train-corrected.obj");
}

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(0);
  
  ambientLight(255, 0, 255);
  directionalLight(255, 255, 255, 0, 0, -1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  noStroke();
  // box(100);

  model(train);

  angle += 0.03;
}
