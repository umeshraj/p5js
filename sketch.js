var bgcol;
var button;

function setup(){
  createCanvas(200, 200);
	bgcolor = color(200);
	button = createButton("go go go");
	button.mousePressed(changeColor);
}

function draw(){
  background(bgcolor);
	fill(255, 0, 0);
  rect(10, 10, 20, 20);
}

function changeColor(){
	bgcolor = color(random(1, 255));
}
