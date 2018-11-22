/// <reference path="./p5d/p5.global-mode.d.ts" />

let mic;

function setup(){
  createCanvas(400, 300);
  mic = new p5.AudioIn();
  mic.start();
}

function draw(){
  let vol = mic.getLevel();
  console.log(vol);

  background(51);
  let rad = map(vol, 0, 1, 10, 100);
  fill(255);
  ellipse(width/2, height/2, rad);
}
