class Bubble{
	constructor(x, y, rad, img){
		this.x = x;
		this.y = y;
		this.rad = rad;
		this.img = img
		this.brightness = 0;

	}

	move(){
		this.x += random(-3, 3);
		this.y += random(-3, 3);
	}

	show(){
		image(this.img, this.x, this.y, 50, 50);
		// stroke(255);
		// fill(this.brightness, this.brightness, this.brightness, 100);
		// ellipse(this.x, this.y, 2*this.rad, 2*this.rad);
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

	clicked(px, py){
		if(px>this.x && px<this.x+this.rad && py>this.y && py<this.y+this.rad){
			this.img = random(kittenList);
		}
	}

}

var bubbleList = [];
var bubble;
let flower;
let kittenList=[];

function preload(){
	flower = loadImage("images/flower.jpg")
	for (let idx=0; idx<5; idx++){
		kittenList[idx] = loadImage("images/kitten" + idx + ".jpg");
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	// bubble1 = new Bubble(200, 200);
	// bubble2 = new Bubble(200, 200);
	for (let idx = 0; idx<10; idx++){
		let x = random(100, 400);
		let y = random(100, 300);
		let r = random(30, 50);
		let img = random(kittenList);
		fill(128);
		bubble = new Bubble(x, y, r, img);
		bubbleList.push(bubble);
	}
}

function draw() {
	background(0);

	// if (bubble1.intersects(bubble2)){
	// 	background(255, 0, 0);
	// }
	//
	// bubble1.show();
	// bubble2.show();
	// // bubble1.move();
	// // bubble2.move();
	// bubble2.x = mouseX;
	// bubble2.y = mouseY;

	// for (let bubble of bubbleList){
	// 	bubble.move();
	// 	bubble.show();
	// }

	for (let b of bubbleList){
		let overlap = false;
		b.move();
		b.show();
		for(let other of bubbleList){
			if (b!=other && b.intersects(other)){
				overlap = true;
			}
		}
		if (overlap){
			b.changeColor(255, 0, 0);
		}else{
			b.changeColor(0);
		}
	}

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
		bubbleList[idx].clicked(mouseX, mouseY);
		// if (bubbleList[idx].contains(mouseX, mouseY)){
		// 	bubbleList.splice(idx, 1);
		// }
	}
}
