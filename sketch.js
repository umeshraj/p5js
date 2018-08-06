let para;
var button;
function setup(){
  createCanvas(100, 100);
  background(0);

  para = select("#unicorn");
  para.mouseOver(changeBackground);
  button = select("#button");
  button.mousePressed(canvasBkgnd);
}

function canvasBkgnd(){
  background(random(255));
}
function changeBackground(){
  para.style('background-color', 'green');
}
