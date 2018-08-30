let slider;
let angle = 0;
function setup(){
  noCanvas();
  slider = createSlider(0, 100, 50);
}

function draw(){
  let x = sin(0);
  slider.value(x);
}
