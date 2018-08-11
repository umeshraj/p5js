function setup(){
  createCanvas(640, 480);
  background(200);

  for(let idx=0; idx<25; idx++){
    let x = random(width);
    let y = random(height);
    let r = 32;
    noStroke();
    fill(255, 0, 150, 100);
    ellipse(x, y, 2*r, 2*r);
  }

}

function draw(){

}
