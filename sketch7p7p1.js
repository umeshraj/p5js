class Bubble{
	constructor(x, y, rad=50){
		this.x = x;
		this.y = y;
		this.rad = rad;
		this.brightness = 0;
	}

	move(){
		this.x += random(-5, 5);
		this.y += random(-5, 5);
	}

	show(){
		stroke(255);
		fill(this.brightness, this.brightness, this.brightness, 100);
		ellipse(this.x, this.y, 2*this.rad, 2*this.rad);
	}

	changeColor(val){
		this.brightness = val;
	}

	contains(x, y){
		let mouseDist = dist(x, y, this.x, this.y);
		return (mouseDist < this.rad)
	}

	intersects(other){
		let d = dist(this.x, this.y, other.x, other.y);
		return (d < (this.rad + other.rad))
	}

}

var bubbleList = [];
var bubble;

function setup() {
	createCanvas(windowWidth, windowHeight);
	bubble1 = new Bubble(200, 200);
	bubble2 = new Bubble(200, 200);
	// for (let idx = 0; idx<5; idx++){
	// 	let x = 100;
	// 	let y = 100;
	// 	let r = random(10, 100);
	// 	fill(128);
	// 	bubble = new Bubble(x, y, r);
	// 	bubbleList.push(bubble);
	// }
}

function draw() {
	background(0);

	if (bubble1.intersects(bubble2)){
		background(255, 0, 0);
	}

	bubble1.show();
	bubble2.show();
	// bubble1.move();
	// bubble2.move();
	bubble2.x = mouseX;
	bubble2.y = mouseY;

	// for (let bubble of bubbleList){
	// 	bubble.move();
	// 	bubble.show();
	// 	if (bubble.contains(mouseX, mouseY)){
	// 		bubble.changeColor(255);
	// 	}else{
	// 		bubble.changeColor(0);
	// 	}
	// }
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
