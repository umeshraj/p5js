let urlPre = "https://api.wordnik.com/v4/word.json/";
let word = "rainbow";
let  urlPost = "/relatedWords?useCanonical=false&limitPerRelationshipType=10&api_key=YOURAPIKEY";
let url = urlPre + urlPost;
let link;

function setup(){
  noCanvas();
  link = createA('#', word)
  link.mousePressed(askWorknik);
}

function askWorknik(){
  loadJSON("wordnik.json", gotData)
}

function gotData(data){
  let newWord = data[0].words[0];
  link.html(newWord);
}

function draw(){
  background(51);
}
