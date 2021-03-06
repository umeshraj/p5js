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

  push();
  noFill();
  let currentY = map(vol, 0, 1, height, 0);  // make plot jump 
  translate(0, height/2-currentY);
  beginShape();
  for (let i=0; i<volHistory.length; i++){
    // let y = map(volHistory[i], 0, 1, height/2, 0);
    let y = map(volHistory[i], 0, 1, height, 0);
    stroke(255);
    vertex(i, y);
  }
  endShape()
  pop();

  // Draw a red line at latest point
  stroke(255, 0, 0);
  line(volHistory.length, 0, volHistory.length, height);

  // remove initial points for moving chart
  if (volHistory.length > width-10){
    volHistory.splice(0, 1);
  }

  // let rad = map(vol, 0, 1, 10, 100);
  // fill(255);
  // ellipse(width/2, height/2, 100, rad);
}
