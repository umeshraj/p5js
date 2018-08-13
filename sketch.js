let song1;
let angle=0;
let loading = true;

function preload(){
}

function setup(){
  createCanvas(300, 300);
  console.log(floor(millis()) + 'ms');
  song1 = loadSound('audio/bark.mp3', soundLoaded);
}

function soundLoaded(song){
  song1=song;
  loading = false;
  song1.play();
}

function draw(){
  background(51);

  if(loading){
    translate(width/2, height/2);
    rotate(angle);
    strokeWeight(4);
    stroke(255);
    line(0, 0, 100, 0);
    angle += 0.1;
  }else{
    background(0, 255, 0, 100);
  }

}
