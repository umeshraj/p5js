function setup(){
  createCanvas(400, 300);
  let url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=***REMOVED***&units=metric"
  loadJSON(url, gotData);
}

function gotData(data){
  console.log(data);
}

function draw(){
  background(51);
}
