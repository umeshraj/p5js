
let sliders = [];
let angle = 0;

function setup() {
  noCanvas();
  for(let idx=0; idx<100; idx++){
      sliders[idx] = createSlider(0, 255, 50);
  }
}

function draw() {
  let offset = 0;
  let x;
  for(let idx=0; idx<sliders.length; idx++){
      x = map(sin(angle+offset), -1, 1, 0, 255);
      offset += 0.0234;
      sliders[idx].value(x);
  }
  angle += 0.1;
}
