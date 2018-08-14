let p;

function setup(){
  createCanvas(400, 300);
  p = new Particle();
}

function draw(){
  background(51);
  p.show();
}

function Particle(){
  this.pos = createVector(width/2, height/2);
  this.show = function(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16, 16);
  }
}

function sum(){
  let out = 0;
  for(let v of arguments){
    out += v;
  }
  return out;
}
