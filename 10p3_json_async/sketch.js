function setup(){
  console.log("loading data...")
  loadJSON("birds_antarctica.json", gotData)
}

function gotData(data){
  console.log("finished loading data...")
  console.log(data);
}

function draw(){

}
