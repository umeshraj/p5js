let mapImg;
function preload(){
    mapImg = loadImage("https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/0,0,1,0,0/1024x512?access_token=***REMOVED***")
}

function setup(){
  createCanvas(1024, 512);
  image(mapImg, 0, 0);
}

function draw(){
  // background(51);
}
