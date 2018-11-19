/// <reference path="./p5d/p5.global-mode.d.ts" />

let song;
let button;
let jumpButton;


function setup(){
  createCanvas(400, 300);
  song  = loadSound('rainbow.mp3', loaded);   
  button = createButton("Play");
  button.mousePressed(togglePlaying);
  // adding jump button
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);
  song.setVolume(0.5);
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

function draw(){
  background(51);
}
