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
  let w = 80;
  let h = 60;
  let x = 0;
  let y = 0;
  for(let img of snapshots){
    tint(255, 50);
    image(img, x, y, w, h);
    x += w;
    if (x >= width){
      x = 0;
      y += h;
    }
  }
}
