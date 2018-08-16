function setup(){
  angleMode(DEGREES);
  createCanvas(400, 300);
}

function draw(){
  background(51);

  noFill();
  stroke(255);
  let spacing = map(mouseX, 0, width, 3, 100);
  beginShape();
    for (let theta=0; theta<360; theta+=spacing){
      let x = width/2 + 100 * sin(theta);
      let y = height/2 + 100 * cos(theta);
      vertex(x, y);
    }
  endShape(CLOSE);
}
