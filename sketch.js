var bgcol;

function setup(){
  createCanvas(200, 200);
	bgcolor = color(200);
	createButton("go go go");
}

function draw(){
  background(bgcolor);
	fill(255, 0, 0);
  rect(10, 10, 20, 20);
}

function mousePressed(){
	bgcolor = color(random(1, 255));
}
