/// <reference path="./p5d/p5.global-mode.d.ts" />

let wave;

function setup(){
  createCanvas(400, 300);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start();
  wave.amp(1);
  wave.freq(300);
}

function draw(){
  background(51);
}
