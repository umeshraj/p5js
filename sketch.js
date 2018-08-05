var myCanvas;
var myH1;
function setup(){
  myCanvas = createCanvas(200, 200);
	myCanvas.position(0, 300);
	myH1 = createElement('h1', "Waiting....");
}

function draw(){
  background(128);
	fill(255, 0, 0);
	let x = random(-5, 5);
	let y = random(-5, 5);
  rect(x, y, 20, 20);
	myH1.position(x, y);
}

function mousePressed(){
	myH1.html("I will show you some text")
	createP("this is my best idea!");
}
