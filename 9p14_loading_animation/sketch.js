let songs = [];
let angle=0;
let loading = true;
let songCounter = 0;
let totalSongs = 4;

function preload(){
}

function setup(){
  createCanvas(300, 300);
  console.log(floor(millis()) + 'ms');
  for (let idx                                                                                                                                                                                                                          =0; idx<totalSongs; idx++){
      rainbowSong(idx, '../audio/song'+ (idx+1) + '.mp3');
  }
}


function rainbowSong(index, filename){
  loadSound(filename, soundLoaded);
  function soundLoaded(sound){
    songs[index] = sound;
    console.log('Loaded ' + filename);
    songCounter++
    if (songCounter==totalSongs){
      loading = false;
    }
    // song.play();
  }
}


function draw(){
  background(51);

  if(loading){

    stroke(255);
    noFill();
    rect(10, 10, 200, 10);

    noStroke();
    fill(128);
    let w = 200*songCounter/totalSongs;
    rect(10, 10, w, 10);

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
