
let slider;
let angle =0;

function setup() {
  createCanvas(300, 300);
  slider = createSlider(0, 255, 50);
}

function draw() {
  let x = map(sin(angle), -1, 1, 0, 255);
  slider.value(x);
  background(slider.value());
  angle += 0.1;
}
