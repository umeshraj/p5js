let flower;

function preload(){
  flower = loadJSON("flower.json");
}

function setup(){
  createCanvas(400, 300);
}

function draw(){
  background(51);
  fill(flower.r, flower.g, flower.b);
  text(flower.name, 10, 50);
}
