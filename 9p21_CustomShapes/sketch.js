function setup(){
  angleMode(DEGREES);
  createCanvas(400, 300);
  background(51);

  noFill();
  stroke(255);
  let spacing = 50;
  beginShape();
    for (let theta=0; theta<360; theta+=spacing){
      let x = width/2 + 100 * sin(theta);
      let y = height/2 + 100 * cos(theta);
      vertex(x, y);
    }
  endShape(CLOSE);
}

// function draw(){
//   background(51);
// }
