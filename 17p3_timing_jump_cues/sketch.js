/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let button;
let jumpButton;


function setup(){
  createCanvas(400, 300);
  background(51);
  song  = loadSound('rainbow.mp3', loaded);   
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  // adding jump button
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  song.setVolume(0.5);

  // adding a song cue
  song.addCue(2, changeBackground, color(0, 255, 0));
  song.addCue(4, changeBackground, color(255, 255, 0));
  song.addCue(6, changeBackground, color(100, 255, 100));
}

function loaded(){
  console.log('Loaded');
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
  // // Keep checking time and change background after 5s
  // if (song.currentTime() > 5){
  //   background(255, 0, 255);
  // }
}
