function Particle(x, y){
  this.x = x;
  this.y = y;

  this.update = function(){
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }

  this.show = function(){
    noStroke();
    fill(255, 150);
    ellipse(this.x, this.y, 24, 24);
  }

}
