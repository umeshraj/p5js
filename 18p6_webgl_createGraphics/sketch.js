/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;
let puppy;
let graphics;

function preload(){
  puppy = loadImage("images/puppy.jpeg");
}

function setup(){
  createCanvas(400, 300, WEBGL);
  graphics = createGraphics(200, 200);
  graphics.background(255);
}

function draw(){
  background(0);
  // graphics.background(random(255));
  graphics.fill(255, 0, 255);
  graphics.ellipse(mouseX, mouseY, 10);

  ambientLight(100);
  directionalLight(255, 255, 255, 0, 0, -1);
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);

  texture(graphics);
  box(100);


  angle += 0.03;
}
