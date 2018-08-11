let circles = [];

function setup(){
  createCanvas(640, 480);
  background(200);

  for(let idx=0; idx<25; idx++){
    let circle = {
      x: random(width),
      y: random(height),
      r: 32
    };

    circles.push(circle);
  }

  noStroke();
  fill(255, 0, 100, 100);
  for(let c of circles){
    ellipse(c.x, c.y, 2*c.r, 2*c.r);
  }

}

function draw(){

}
