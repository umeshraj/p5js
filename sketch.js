var particles = [];
function setup(){
  createCanvas(400, 300);
}

function mousePressed(){
  let particle = new Particle(mouseX, mouseY);
      particles.push(particle);
}

function draw(){
  background(200);
  for (let p of particles){
    p.update();
    p.show();
  }
}
