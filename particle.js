var gravity = 0.1;

function Particle(x, y){
  this.x = x;
  this.y = y;
  this.yspeed = 0;
  this.history = [];

  this.update = function(){
    this.y+=this.yspeed;
    this.yspeed += gravity;

    if (this.y > height){
      this.y = height;
      this.yspeed *= -0.9;
    }

    let v = createVector(this.x, this.y);
    this.history.push(v);
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
