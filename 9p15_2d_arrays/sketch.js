let cols = 10;
let rows = 5;
let colors = [];


function setup(){
  createCanvas(400, 300);
  colors = make2DArray(rows, cols);
  for(let r=0; r<rows; r++){
    for(let c=0; c<cols; c++){
      colors[r][c] = random(255);
    }
  }
}

function draw(){
  background(51);
  for(let c=0; c<cols; c++){
    for(let r=0; r<rows; r++){
      let x = c*30;
      let y = r*30;
      stroke(0);
      fill(colors[r][c]);
      rect(x, y, 30, 30);
    }
  }
}

function make2DArray(rows, cols){
  var arr = new Array(rows);
  for(let r=0; r<rows; r++){
    arr[r] = new Array(cols);
  }
  return arr;
}
