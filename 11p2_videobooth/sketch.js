let video;
let button;
let snapshots = [];
let go = false;
let counter = 0;

function setup(){
  createCanvas(400, 300);
  background(51);
  video = createCapture(VIDEO,  videoReady);
  video.size(400, 300);
  // button = createButton("snap");
  // button.mousePressed(takeSnap);
}

function videoReady(){
  go = true;
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

  if (go){
    snapshots[counter] = video.get();
    counter++;
    if (counter == 40){
      counter = 0;
    }
  }
  // for(let img of snapshots){
  for (let idx=0; idx<snapshots.length; idx++){
    // tint(255, 50);
    let my_idx = (idx + frameCount) % snapshots.length
    image(snapshots[my_idx], x, y, w, h);
    // image(snapshots[idx], x, y, w, h);
    x += w;
    if (x >= width){
      x = 0;
      y += h;
    }

    if (y>= height){
      x = 0;
      y = 0;
    }
  }


}
