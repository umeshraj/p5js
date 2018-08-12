var sketch = function(p){
  p.x = 100;
  p.y = 100;
  p.setup = function(){
    p.createCanvas(640, 480);
    p.background(200);
    p.x = p.width/2;
    p.y = p.height/2;
  }

  p.draw = function(){
    p.fill(255, 0, 100, 10);
    p.noStroke();
    p.ellipse(p.x, p.y, 30, 30);
    p.x += p.random(-10, 10);
    p.y += p.random(-10, 10);
  }
}

var myp5 = new p5(sketch);
