let particles=[];

function setup(){
  createCanvas(400, 300);
  // default
  particles[0] = new Particle();
  // specify x, y
  particles[1] = new Particle(150, 50);
  // using vectors
  let v = createVector(20, 50);
  particles[2] = new Particle(v);
  // using strings
  particles[3] = new Particle("50, 75");
}

function draw(){
  background(51);
  for(let p of particles){
    p.show();
  }
}

function Particle(a, b){
  if (a instanceof p5.Vector){
      this.x = a.x;
      this.y = a.y;
  }else if (typeof(a)=='string'){
    let nums = a.split(',');
    this.x = Number(nums[0]);
    this.y = Number(nums[1]);
  }else{
    this.x = a || 100;
    this.y = b || 100;
  }

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }
}

function sum(){
  let out = 0;
  for(let v of arguments){
    out += v;
  }
  return out;
}
