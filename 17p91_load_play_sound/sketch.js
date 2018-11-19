/// <reference path="./p5d/p5.global-mode.d.ts" />

var sound;

function preload(){
  sound  = loadSound('rainbow.mp3');
}

function setup(){
  createCanvas(400, 300);
  sound.play();
}

function draw(){
  background(51);
}
