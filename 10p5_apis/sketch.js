let weather;

function setup(){
  createCanvas(400, 300);
  let url = "http://api.openweathermap.org/data/2.5/weather?q=London&APPID=***REMOVED***&units=metric  "
  loadJSON(url, gotData);
}

function gotData(data){
  console.log(data);
  weather = data;
}

function draw(){
  background(51);
  if(weather){
    fill('pink');
    ellipse(50, 100, weather.main.temp, weather.main.temp);
    fill('blue');
    ellipse(150, 100, weather.main.humidity, weather.main.humidity);
  }
}
