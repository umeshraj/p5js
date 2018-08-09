let x = 0;
function setup() {
  createCanvas(200, 200);
  setTimeout(rainbow, 3000);
}

function rainbow(){
  createP("rainbow");
}

function draw(){
  background(51);
  stroke(255);
  line(x, 0, x, height);

  x += 3;
  if (x>width){
    x = 0;
  }
}
