function setup(){
  createCanvas(600, 400);
	createElement('h1', "My favorite text below");
}

function draw(){
  background(128);
  rect(100, 100, 50, 50);
}

function mousePressed(){
	createP("this is my best idea!");
}
