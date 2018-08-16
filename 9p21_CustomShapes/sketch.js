function setup(){
  angleMode(DEGREES);
  createCanvas(400, 300);
}

function draw(){
  background(51);

  // draw points
  strokeWeight(12);
  stroke('red');
  point(mouseX, mouseY);
  point(150, 50);
  point(250, 60);
  point(300, 200);


  noFill();
  stroke(255);
  strokeWeight(2);
  // let spacing = map(mouseX, 0, width, 3, 100);

  beginShape();
    // for (let theta=0; theta<360; theta+=spacing){
    //   let x = width/2 + 100 * sin(theta);
    //   let y = height/2 + 100 * cos(theta);
    //   vertex(x, y);
    // }
    curveVertex(mouseX, mouseY);
    curveVertex(150, 50);
    curveVertex(250, 60);
    curveVertex(300, 200);
  endShape(CLOSE);
}
