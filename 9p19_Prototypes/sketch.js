function Particle(){
  this.x = 100;
  this.y = 90;
  this.show = function(){
    point(this.x, this.y);
  }
}

let p;

function setup(){
  createCanvas(400, 300);
  p = new Particle();
}
