let data;

function preload(){
  data = loadJSON("birds_antarctica.json");
}

function setup(){
  noCanvas();
  let bird = data.birds[1].members[2];
  createP(bird)
}
