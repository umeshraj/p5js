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
  angleMode(DEGREES);  // want p5 to think in degrees
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

  // Radial plot
  translate(width/2, height/2);
  noFill();
  stroke(255);
  beginShape();
  for (let i=0; i<volHistory.length; i++){
    let r = map(volHistory[i], 0, 1, 0, width);
    let x = r * cos(i);
    let y = r * sin(i);
    // let y = map(volHistory[i], 0, 1, height, 0);
    // stroke(255);
    vertex(x, y);
  }
  endShape();

  // remove initial points for moving chart
  if (volHistory.length > 360){
    volHistory.splice(0, 1);
  }

  // let rad = map(vol, 0, 1, 10, 100);
  // fill(255);
  // ellipse(width/2, height/2, 100, rad);
}
