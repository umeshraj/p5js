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
  background(51);
  let reached = [];
  let unreached = [];
  // move all vertices into unreached
  for(let v of vertices){
    unreached.push(v);
  }
  // pick the first unreached to start algo
  reached.push(unreached[0]);
  //removed selected from unreached
  unreached.splice(0, 1);

  // for each v in reached, find the closest v
  while (unreached.length > 0){
    let rIdx;
    let uIdx;
    // for every unreached
    let maxDist = 100000;
    for(let i=0; i<reached.length; i++){
        for(let j=0; j<unreached.length; j++){
          let r = reached[i];
          let u = unreached[j];
          let d = dist(r.x, r.y, u.x, u.y)
          if (d < maxDist){
            maxDist = d;
            rIdx = i;
            uIdx = j;
          }
        }
    }
    stroke(255);
    line(reached[rIdx].x, reached[rIdx].y,
      unreached[uIdx].x, unreached[uIdx].y)
    reached.push(unreached[uIdx]);
    unreached.splice(uIdx, 1);
  }


  for (let v of vertices){
    stroke(0);
    fill(255);
    ellipse(v.x, v.y, 10, 10);
  }
}
