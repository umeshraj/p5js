let video;
let vScale = 16;
let rows = 40;  // number of rows of check boxes
let cols = 30;  // number of cols of check boxes
let boxes = [];

function setup(){
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  slider = createSlider(0, 255, 77);
  // create check boxes
  for(let y=0; y<rows; y++){
    for(let x=0; x<cols; x++){
      let box = createCheckbox();
      box.parent('mirror');
      boxes.push(box);
    }
    let lineBreak = createSpan('<br/>');
    lineBreak.parent('mirror');
  }
}

function draw(){
  background(51);
  let threshold = slider.value();

  video.loadPixels();
  // loadPixels();
  for (let y=0; y<video.height; y++){
    for (let x=0; x<video.width; x++){
        let idx = (video.width-x+1+ (y*video.width) ) * 4;
        let r = video.pixels[idx+0];
        let g = video.pixels[idx+1];
        let b = video.pixels[idx+2];
        let checkIdx = x + y*cols;

        let bright = (r+g+b)/3;
        if (bright > threshold){
          fill(255);
          boxes[checkIdx].checked(false);
        }else{
          fill(0);
          boxes[checkIdx].checked(true);
        }
        // noStroke();
        rectMode(CENTER);
        rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
  // updatePixels();
}
