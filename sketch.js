
let sliders = [];
let angle = 0;

function setup() {
  noCanvas();
  for(let idx=0; idx<10; idx++){
      sliders[idx] = createSlider(0, 255, 50);
  }
}

function draw() {
  let x = map(sin(angle), -1, 1, 0, 255);
  for(let idx=0; idx<sliders.length; idx++){
      sliders[idx].value(x);
  }
  angle += 0.1;
}
