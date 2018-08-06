let para;
var button;
function setup(){
  createCanvas(100, 100);
  background(0);

  // para = select("#unicorn");
  // para.mouseOver(highlight);
  // para.mouseOut(unhighlight);
  para = selectAll(".rainbow");
  for (let p of para){
    p.mouseOver(highlight);
    p.mouseOut(unhighlight);
    // p.style("background-color", 'yellow');
  }
  button = select("#button");
  button.mousePressed(canvasBkgnd);
}

function highlight(){
  this.style('padding', '16pt');
  this.style('background-color', '#F0F');
}

function unhighlight(){
  this.style('padding', '0pt');
  this.style('background-color', 'white');
}

function canvasBkgnd(){
  background(random(255));
}
function changeBackground(){
  p.style('background-color', 'green');
}
