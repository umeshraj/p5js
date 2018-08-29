let userInput;
let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
let contentUrl = 'https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&format=json&titles=';

function setup(){
  noCanvas();
  userInput = select('#userinput');
  userInput.changed(goWiki);
  goWiki();  // force printing of what is in the input box
}

function goWiki(){
  let term = userInput.value();
  let url = searchUrl + term;
  loadJSON(url, gotSearch, "jsonp")
}

function gotSearch(data){
  //randomly pick an element
  let title = random(data[1]);
  createP(title);
  // replace all spaces with _
  title = title.replace(/\s+/g, '_')
  console.log("Quering: " + title);
  let url = contentUrl + title;
  console.log(url);
  loadJSON(url, gotContent, 'jsonp');
}

function gotContent(data){
  let page = data.query.pages;
  let pageId = Object.keys(data.query.pages)[0];
  let content = page[pageId]["revisions"][0]["*"]

  let wordRegex = /\b\w{4,}\b/g;
  let words = content.match(wordRegex);
  let word = random(words);
  console.log(word);
}
