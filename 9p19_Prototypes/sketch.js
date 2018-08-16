function Particle(){
  this.x = 100;
  this.y = 90;
}

Particle.prototype.show = function(){
  point(this.x, this.y)
}

let p;
let v;

function setup(){
  createCanvas(400, 300);
  p = new Particle();
  v = createVector(2, 3);
}
