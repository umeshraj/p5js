function setup(){
  createCanvas(400, 300);
  let c = sum(10, 5);
  console.log(c);
}

function draw(){
  background(51);
}

function sum(){
  let out = 0;
  for(let v of arguments){
    out += v;
  }
  return out;
}
