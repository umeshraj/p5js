function Particle(x, y){
  this.x = x;
  this.y = y;
  this.history = [];

  this.update = function(){
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    let v = createVector(this.x, this.y);
    this.history.push(v);
    if (this.history.length > 200){
      this.history.splice(0, 1);
    }
  }

  this.show = function() {
      stroke(0);
      fill(0, 150);
      ellipse(this.x, this.y, 24, 24);

      // showing history
      noFill();
      beginShape()
      for (let pos of this.history){
        vertex(pos.x, pos.y);
      }
      endShape();

  }

}
