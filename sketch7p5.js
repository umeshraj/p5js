let bubble1;
let bubble2

class Bubble{
	constructor(x, y, rad){
		this.x = x;
		this.y = y;
		this.rad = rad;
		this.brightness = 0;
	}

	move(){
		this.x += random(-4, 4);
		this.y += random(-4, 4);
	}

	show(){
		stroke(255);
		fill(this.brightness, this.brightness, this.brightness, 100);
		ellipse(this.x, this.y, this.rad, this.rad);
	}

	changeColor(val){
		this.brightness = val;
	}

	contains(x, y){
		let mouseDist = dist(x, y, this.x, this.y);
		return (mouseDist < this.rad)
	}
}

var bubbleList = [];
var bubble;

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let idx = 0; idx<5; idx++){
		let x = 100;
		let y = 100;
		let r = random(10, 100);
		fill(128);
		bubble = new Bubble(x, y, r);
		bubbleList.push(bubble);
	}
}

function draw() {
	background(0);

	// bubble.move();
	// bubble.show();
	for (let bubble of bubbleList){
		bubble.move();
		bubble.show();
		if (bubble.contains(mouseX, mouseY)){
			bubble.changeColor(255);
		}else{
			bubble.changeColor(0);
		}
	}
	// for (let idx=0; idx<bubbleList.length; idx++){
	// 	bubbleList[idx].move();
	// 	bubbleList[idx].show();
	// }
}

function mouseDragged(){
	let rad = random(10, 100);
	let b = new Bubble(mouseX, mouseY, rad);
	bubbleList.push(b);
	if (bubbleList.length > 10){
		bubbleList.splice(0, 1);
	}
}

function mousePressed(){
	for (let idx=0; idx<bubbleList.length; idx++){
		if (bubbleList[idx].contains(mouseX, mouseY)){
			bubbleList.splice(idx, 1);
		}
	}
}
