let sliders = [];

let angle = 0;
function setup(){
  noCanvas();
  for (let i=0;i<10;i++){
    sliders[i] = createSlider(0, 255, 50);
  }
}

function draw(){
  let x = map(sin(angle), -1, 1, 0, 255);
  for (let i=0; i<sliders.length;i++){
    sliders[i].value(x);  
  }

  angle += 0.1;
}
