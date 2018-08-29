let video;
let button;
let snapshots = [];

function setup(){
  createCanvas(400, 300);
  background(51);
  video = createCapture(VIDEO);
  video.size(400, 300);
  button = createButton("snap");
  button.mousePressed(takeSnap);
}

function takeSnap(){
  snapshots.push(video.get());
  // image(video, 0, 0);
}

function draw(){
  for(let img of snapshots){
    tint(255, 50);
    image(img, 0, 0);
  }
}
