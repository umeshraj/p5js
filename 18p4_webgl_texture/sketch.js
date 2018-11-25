/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;
let puppy;
let cam; 

function preload(){
  puppy = loadImage('images/puppy.jpeg');
}

function setup(){
  createCanvas(400, 300, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(200, 200);
  cam.hide();
}

function draw(){
  background(128);
  ambientLight(255);

  texture(cam);

  rotateZ(angle * 0.2);
  rotateY(angle * 0.3);
  rotateX(angle * 0.1);

  noStroke();
  box(100);

  angle += 0.07;
}
