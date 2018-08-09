
let slider;
let x = 128;

function setup() {
  createCanvas(300, 300);
  slider = createSlider(0, 255, 50);
}

function draw() {
  slider.value(x);
  x = x + random(-5, 5);
  background(x);
}
