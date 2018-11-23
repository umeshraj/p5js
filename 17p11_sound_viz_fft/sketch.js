/// <reference path="./p5d/p5.global-mode.d.ts" />

let mic;
let song;
let button;
let fft;  // fft object


function preload(){
  song = loadSound('this-dot-kp.mp3');
}

function setup(){
  createCanvas(256, 256);
  colorMode(HSB);
  angleMode(DEGREES);  // want p5 to think in degrees
  button = createButton('Toggle');
  button.mousePressed(toggleSong);
  // song.play();  
  fft = new p5.FFT(0.9,128);
}

function toggleSong(){
  if (song.isPlaying()){
    song.pause();
  }else{
    song.play();
  }
}

function draw(){
  background(0);

  let spectrum = fft.analyze();
  // console.log(spectrum.length);
  // plot the spectrum
  // noStroke();
  // for (let i=0; i<spectrum.length; i++){
  //   let amp = spectrum[i];
  //   let y = map(amp, 0, 255, height, 0);
  //   // line(i*w, height, i*w, y);
  //   fill(i, 255, 255);
  //   rect(i*w, y, w-5, height-y);
  // }
  
  // plotting as a circle
  noStroke()
  translate(width/2, height/2);
  // beginShape();
  for (let i=0; i<spectrum.length; i++){
    let angle = map(i, 0, spectrum.length, 0, 360);
    let amp = spectrum[i];
    let r = map(amp, 0, 256, 20, 100);
    let x = r * cos(angle);
    let y = r * sin(angle);
    stroke(i, 255, 255);
    line(0, 0, x, y);
    // vertex(x, y);
  }
  // endShape();


}
