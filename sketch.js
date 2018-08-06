var textBox;
var slider;
var para;

function setup(){
  noCanvas();
  para = createP('starting text');
  textBox = createInput('enter text');
  slider = createSlider(10, 64, 16);

  textBox.changed(doSomething);
}

function doSomething(){
  para.html(textBox.value());
}
