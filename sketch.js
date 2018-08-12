let vertices = [];

function setup(){
  createCanvas(640, 480);
  background(200);
}

function mousePressed(){
  let v = createVector(mouseX, mouseY);
  vertices.push(v);
}

function draw(){
  for (let v of vertices){
    ellipse(v.x, v.y, 10, 10);
  }

}
