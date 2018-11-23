/// <reference path="./p5d/p5.global-mode.d.ts" />

function setup(){
  createCanvas(400, 300, WEBGL);
}

function draw(){
  background(51);

  rectMode(CENTER);
  rect(0, 0, 50, 50);
}
