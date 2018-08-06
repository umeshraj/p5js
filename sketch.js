var textBox;
var slider;
var para;

function setup(){
  noCanvas();
  para = createP('starting text');
  textBox = createInput('enter text');
  slider = createSlider(10, 64, 16);

  textBox.input(doSomething);
  slider.input(updateSize);
}

function doSomething(){
  para.html(textBox.value());
}

function updateSize(){
  para.style("font-size", slider.value() + "pt");
}
