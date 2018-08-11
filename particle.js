function Particle(x, y){
  this.x = x;
  this.y = y;
  this.history = [];

  this.update = function(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    let v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 10){
      this.history.splice(0, 1);
    }
  }

  this.show = function() {
      stroke(0);
      fill(0, 150);
      ellipse(this.x, this.y, 24, 24);

      // showing history
      for (let pos of this.history){
        fill(128);
        ellipse(pos.x, pos.y, 8, 8);
      }

  }

}
