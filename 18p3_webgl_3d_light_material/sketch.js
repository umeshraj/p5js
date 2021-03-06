/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(128);
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  let vec = createVector(dx, dy, 0);
  vec.normalize();

  // rectMode(CENTER);

  // fill(0, 0, 255);
  // normalMaterial();
  // ambientLight(255);
  // pointLight(0, 0, 255, -200, 0, +200);
  // pointLight(255, 0, 0, 0, +200, +200);
  directionalLight(255, 255, 0, vec);

  ambientMaterial(255);
  // specularMaterial(255);
  // translate(mouseX - width/2, mouseY-height/2);
  // translate(0, 0, mouseX);

  rotateZ(angle * 0.2);
  rotateY(angle * 0.3);
  rotateX(angle * 0.1);
  // rect(0, 0, 150, 100);
  // box(10, 100, 50);
  noStroke();
  torus(100, 10);

  angle += 0.07;
}
