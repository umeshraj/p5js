let flower;

function setup(){
  createCanvas(400, 300);
  flower = {
    name: "sunflower",
    col: color(200, 220, 0)
  };
}

function draw(){
  background(51);
  fill(flower.col);
  text(flower.name, 10, 50);
}
