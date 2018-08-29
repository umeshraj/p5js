let userInput;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';

function setup(){
  noCanvas();
  userInput = select('#userinput');
  userInput.changed(goWiki);
  goWiki();  // force printing of what is in the input box
}

function goWiki(){
  let term = userInput.value();
  let url = searchUrl + term;
  loadJSON(url, gotData, "jsonp")
}

function gotData(){
  // console.log(data);
}
