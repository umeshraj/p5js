/// <reference path="./p5d/p5.global-mode.d.ts" />

let mic;
let song;
let button;
let fft;  // fft object
let volHistory = []; 
let w; // width of fft bands


function preload(){
  song = loadSound('this-dot-kp.mp3');
}

function setup(){
  createCanvas(256, 256);
  angleMode(DEGREES);  // want p5 to think in degrees
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  // song.play();  
  fft = new p5.FFT(0,64);
  w = width/64;
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

  let spectrum = fft.analyze();
  // console.log(spectrum.length);
  // plot the spectrum
  stroke(255);
  for (let i=0; i<spectrum.length; i++){
    let amp = spectrum[i];
    let y = map(amp, 0, 255, height, 0);
    line(i*w, height, i*w, y);
  }
  
}
