var bgcol;
var button;
var slider;
var nameInput;
var nameP;

function setup(){
  createCanvas(200, 200);
	bgcolor = color(200);
	nameP = createP("Your name");  // to moe button below

	button = createButton("Go");
	button.mousePressed(changeColor);
	slider = createSlider(10, 100, 40);
	createP("");
	nameInput = createInput("type your name");
	nameInput.changed(updateText);

	nameP.mouseOver(overpara);
	nameP.mouseOut(outpara);

}

function draw(){
  background(bgcolor);
	fill(255, 0, 0);
  ellipse(50, 50, slider.value(), slider.value());
	text(nameInput.value(), 75, 75);
	// nameP.html(input.value());
}

function updateText(){
	nameP.html(nameInput.value());
}

function overpara(){
	nameP.html('your mouse is over me');
}

function outpara(){
	nameP.html('your mouse is out of para');
}

function changeColor(){
	bgcolor = color(random(1, 255));
}
