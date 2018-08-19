let spaceData;

function setup(){
  createCanvas(400, 300);

  console.log("loading data...")
  loadJSON("http://api.open-notify.org/astros.json", gotData)
}

function gotData(data){
  console.log("finished loading data...")
  console.log(data.number);
  spaceData = data;
}

function draw(){
  background(51);
  randomSeed(4);

  if (spaceData){
    for (let idx=0; idx<spaceData.number; idx++){
      fill('pink');
      ellipse(random(width), random(height), 20, 20);
    }
  }
}
