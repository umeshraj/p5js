var bgcol;
var button;
var slider;
var input;

function setup(){
  createCanvas(200, 200);
	bgcolor = color(200);
	createP("");  // to moe button below
	button = createButton("Go");
	button.mousePressed(changeColor);
	slider = createSlider(10, 100, 40);
	createP("");
	input = createInput("type your name");
}

function draw(){
  background(bgcolor);
	fill(255, 0, 0);
  ellipse(50, 50, slider.value(), slider.value());
	text(input.value(), 75, 75);
}

function changeColor(){
	bgcolor = color(random(1, 255));
}
