
let sliders = [];
let angle = 0;

function setup() {
  noCanvas();
  for(let idx=0; idx<100; idx++){
      sliders[idx] = createSlider(0, 255, 50);
  }
  sliders[0].input(adjustOtherSliders);
}

function adjustOtherSliders() {
  for(let idx=1; idx<sliders.length; idx++){
      sliders[idx].value(sliders[0].value());
  }
}
