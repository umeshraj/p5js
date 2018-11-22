/// <reference path="./p5d/p5.global-mode.d.ts" />

let mic;
let song;
let button;
let amp;  // amplitude object

function preload(){
  song = loadSound('this-dot-kp.mp3');
}

function setup(){
  createCanvas(400, 300);
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  song.play();  
  amp = new p5.Amplitude();
}

function toggleSong(){
  if (song.isPlaying()){
    song.pause();
  }else{
    song.play();
  }
}

function draw(){
  let vol = amp.getLevel();
  background(51);
  let rad = map(vol, 0, 1, 10, 100);
  fill(255);
  ellipse(width/2, height/2, 100, rad);
}
