let data;

function preload(){
  data = loadJSON("birds_antarctica.json");
}

function setup(){
  noCanvas();
  let birds = data.birds;
  for(let bird of birds){
    createElement("h1", bird.family)
    let members = bird.members;
    for(let member of members){
      createDiv(member);
    }
  }
}
