/// <reference path="./p5d/p5.global-mode.d.ts" />

let wave;
let playing = false; 
let env;


function setup(){
  createCanvas(400, 300);

  // set up adsr envelope
  env = new p5.Env();
  env.setADSR(0.5, 0.25, 0.5, 0.1);
  env.setRange(0.8, 0);

  // set up the waveform
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start()
  wave.amp(env);
  wave.freq(440);

  button = createButton('play/pause');
  button.mousePressed(toggle);

  // add slider to control frequencies
  slider = createSlider(100, 1200, 440);
}

function draw(){
  wave.freq(slider.value());
  if (playing){
    background(255, 0, 255);
  }else{
    background(51);
  }
}

function toggle(){
  env.play()
  // if (!playing){
  //   wave.amp(1, 1);
  //   playing = true;
  // }else{
  //   wave.amp(0, 1);
  //   playing = false;
  // }
}