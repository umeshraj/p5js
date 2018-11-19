/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let button;


function setup(){
  createCanvas(400, 300);
  song  = loadSound('rainbow.mp3', loaded);   
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  song.setVolume(0.5);
}

function loaded(){
  console.log('Loaded');
}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play();
  } 
}

function draw(){
  background(51);
}
