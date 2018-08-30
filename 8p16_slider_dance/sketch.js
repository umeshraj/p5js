let slider;
let angle = 0;
function setup(){
  noCanvas();
  slider = createSlider(0, 255, 50);
}

function draw(){
  let x = map(sin(angle), -1, 1, 0, 255) ;
  slider.value(x);
  angle += 0.1;
}
