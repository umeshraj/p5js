let particles=[];

function setup(){
  createCanvas(400, 300);
  particles[0] = new Particle();
  particles[1] = new Particle(150, 50);
}

function draw(){
  background(51);
  for(let p of particles){
    p.show();
  }
}

function Particle(x, y){
  this.x = x || 100;
  this.y = y || 100;
  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }
}

function sum(){
  let out = 0;
  for(let v of arguments){
    out += v;
  }
  return out;
}
