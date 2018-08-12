var sketch = function(p){
  p.x = 100;
  p.y = 100;
  p.setup = function(){
    p.createCanvas(200, 200);
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

var myp5_1 = new p5(sketch);
var myp5_2 = new p5(sketch);

function resetBackground(){
  myp5_1.x = myp5_1.width/2;
  myp5_1.y = myp5_1.height/2;
  myp5_1.background(200);
}
setInterval(resetBackground, 3000);
