/// <reference path="./p5d/p5.global-mode.d.ts" />

var song;

function preload(){
  song  = loadSound('rainbow.mp3');
}

function setup(){
  createCanvas(400, 300);
  song.play();
  song.setVolume(0.5);
}

function draw(){
  background(51);
}
