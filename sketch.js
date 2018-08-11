let circles = [];

function setup(){
  createCanvas(640, 480);
  background(200);

  let protection = 0;
  while ((circles.length < 250) && (protection<10000)){
    let circle = {
      x: random(width),
      y: random(height),
      r: random(10, 40)
    };

    if (isCircleValid(circle)){
      circles.push(circle);
    }
    protection++;
  }
  drawCircles();
}

function isCircleValid(circle){
  isValid = true;
  for (let c of circles){
    let d = dist(circle.x, circle.y, c.x, c.y);
    if (d < (circle.r + c.r)){
      isValid = false;
      break;
    }
  }
  return isValid;
}

function drawCircles(){
  noStroke();
  fill(255, 0, 100, 100);
  for(let c of circles){
    ellipse(c.x, c.y, 2*c.r, 2*c.r);
  }
}

function draw(){

}
