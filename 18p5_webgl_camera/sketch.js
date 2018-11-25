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
  translate(0, 0, mouseX);
  // ambientLight(255);
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let vec = createVector(dx, dy, 0);
  vec.normalize();
  directionalLight(255, 255, 255, vec);

  push();
  rotateZ(angle * 0.2);
  rotateY(angle * 0.3);
  rotateX(angle * 0.1);
  
  noStroke();
  // texture(cam);
  normalMaterial(255);
  box(100);
  pop();

  // adding a plane
  translate(0, 100);
  rotateX(HALF_PI);
  ambientMaterial(51);
  plane(640, 480);


  angle += 0.07;
}
