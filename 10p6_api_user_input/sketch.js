let weather;
let apiPath = "http://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "&APPID=***REMOVED***";
let units = "&units=metric";
let input;

function setup(){
  createCanvas(400, 300);
  let button = select("#submit");
  button.mousePressed(getWeatherData)
  // text input
  input = select("#city");

}

function getWeatherData(){
  let city = input.value();
  let url = apiPath + city + apiKey + units;
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
