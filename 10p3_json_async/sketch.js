function setup(){
  createCanvas(400, 300);

  console.log("loading data...")
  loadJSON("http://api.open-notify.org/astros.json", gotData)
}

function gotData(data){
  background(51);
  console.log("finished loading data...")
  console.log(data.number);
  for (let idx=0; idx<data.number; idx++){
    fill('pink');
    ellipse(random(width), random(height), 20, 20);
  }
}

function draw(){

}
