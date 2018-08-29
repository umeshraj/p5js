function setup(){
  createCanvas(320, 240);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  video.hide();
}

function draw(){
  // background(51);
  image(video, 0, 0);
}
