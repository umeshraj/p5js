/// <reference path="./p5d/p5.global-mode.d.ts" />

let wave;
let playing = false; 

function setup(){
  createCanvas(400, 300);
  wave = new p5.Oscillator();
  wave.setType('sine');
  wave.start()
  wave.amp(0);
  wave.freq(300);

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
  if (!playing){
    wave.amp(1, 1);
    playing = true;
  }else{
    wave.amp(0, 1);
    playing = false;
  }
}