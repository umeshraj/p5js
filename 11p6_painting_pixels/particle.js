function Particle(x, y){
  this.x = x;
  this.y = y;

  this.update = function(){
    this.x += random(-10, 10);
    this.y += random(-10, 10);

    // don't let particle leave the window
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
    // this.x += 24;
    // if (this.x >= width){
    //   this.x=0;
    //   this.y+=24;
    // }
    // if (this.y>=height){
    //   this.x=0;
    //   this.y=0;
    // }
  }

  this.show = function(){
    var px = floor(this.x/vscale);
    var py = floor(this.y/vscale);
    var col = video.get(px, py);

    noStroke();
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, 24, 24);
  }

}
