function setup(){
  createCanvas(400, 300);
  let c = sum(10, 5);
  console.log(c);
}

function draw(){
  background(51);
}

function sum(a, b){
  console.log(arguments);
  return a + b;
}
