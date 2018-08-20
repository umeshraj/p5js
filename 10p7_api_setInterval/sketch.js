let lineX = 0
let apiPath = "http://api.open-notify.org/iss-now.json";
let issX = 0;
let issY = 0;

function setup(){
  createCanvas(400, 300);
  loadJSON(apiPath, gotData);
}

function gotData(data){
  console.log(data);
  let lat = data.iss_position.latitude;
  let lon = data.iss_position.longitude;

  issX = map(lat, -90, 90, 0, width);
  issY = map(lon, -90, 90, 0, height);
}

function draw(){
  background(51);
  fill(255);
  ellipse(issX, issY, 30, 30);

  stroke(255);
  line(lineX, 0, lineX, height);

  lineX = (lineX + 5) % width;
}
