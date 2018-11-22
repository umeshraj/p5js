/// <reference path="./p5d/p5.global-mode.d.ts" />

let mic;
let song;
let button;
let amp;  // amplitude object
let volHistory = []; 

function preload(){
  song = loadSound('this-dot-kp.mp3');
}

function setup(){
  createCanvas(400, 300);
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  // song.play();  
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
  background(51);

  let vol = amp.getLevel();
  volHistory.push(vol);

  noFill();
  beginShape();
  for (let i=0; i<volHistory.length; i++){
    let y = map(volHistory[i], 0, 1, height, 0);
    stroke(255);
    vertex(i, y);
  }
  endShape()
  if (volHistory.length > width){
    volHistory.splice(0, 1);
  }

  // let rad = map(vol, 0, 1, 10, 100);
  // fill(255);
  // ellipse(width/2, height/2, 100, rad);
}
