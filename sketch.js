
let slider;

function setup() {
  createCanvas(300, 300);
  slider = createSlider(0, 255, 50);
}

function draw() {
  background(slider.value());
}
