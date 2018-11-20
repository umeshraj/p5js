/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let button;
let jumpButton;
let amp;


function setup(){
  createCanvas(400, 300);
  background(51);
  song  = loadSound('rainbow.mp3', loaded);   
  song.setVolume(0.5);

  // adding a song cue
  song.addCue(2, changeBackground, color(0, 255, 0));
  song.addCue(4, changeBackground, color(255, 255, 0));
  song.addCue(6, changeBackground, color(100, 255, 100));

  // Amplitude
  amp = new p5.Amplitude();
}

function loaded(){
  console.log('Loaded');
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  // adding jump button
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

}

function togglePlaying(){
  if(!song.isPlaying()){
    song.play();
    button.html("Pause");
  }else{
    song.pause();
    button.html("Play");
  } 
}

function jumpSong(){
  let len = song.duration();
  let t = random(len);
  console.log("Jumping to " + t + " of " + len + " sec");
  song.jump(t); 
}

function changeBackground(color){
  background(color);
}

function draw(){

  fill(255, 0, 255);
  let vol = amp.getLevel();
  let diameter = map(vol, 0, 1, 10, 300);
  ellipse(width/2, height/2, diameter, diameter);
}
