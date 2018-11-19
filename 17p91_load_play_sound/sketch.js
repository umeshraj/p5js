/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let sliderVolume;
let sliderRate;
let sliderPan;

// function preload(){
//   song  = loadSound('rainbow.mp3');
// }

function setup(){
  createCanvas(400, 300);
  sliderVolume = createSlider(0, 1, 0.5, 0.1);
  sliderRate = createSlider(0, 3, 0.5, 0.1);
  sliderPan = createSlider(0, 1, 0.5, 0.1);

  song  = loadSound('rainbow.mp3', loaded);   
  song.setVolume(0.5);
}

function loaded(){
  song.play();
}

function draw(){
  background(51);
  song.setVolume(sliderVolume.value());
  song.rate(sliderRate.value());
  // song.setPan(sliderVolume.value());
}
