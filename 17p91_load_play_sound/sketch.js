/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let slider;

// function preload(){
//   song  = loadSound('rainbow.mp3');
// }

function setup(){
  createCanvas(400, 300);
  slider = createSlider(0, 1, 0.5, 0.1);
  song  = loadSound('rainbow.mp3', loaded);   
}

function loaded(){
  song.play();
}

function draw(){
  background(51);
  song.setVolume(slider.value());
}
