var bgcol;
var button;
var slider;
var nameInput;
var nameP;
var text2;

function setup(){
  createCanvas(200, 200);
	bgcolor = color(200);
	nameP = createP("Your name");  // to moe button below

	button = createButton("Go");
	button.mousePressed(changeColor);
	slider = createSlider(10, 100, 40);
	text2 = createP("This is another paragraph");

	text2.mouseOver(changeStyle);
	text2.mouseOut(revertStyle);

	nameInput = createInput("type your name");
	nameInput.input(updateText);

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

function changeStyle(){
	text2.style("background-color", "pink");
	text2.style("color", "black");
}

function revertStyle(){
	text2.style("background-color", "purple");
	text2.style("color", "white");
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
