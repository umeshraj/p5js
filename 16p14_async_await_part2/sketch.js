/// <reference path="./p5d/p5.global-mode.d.ts" />

const wordnikAPI = "https://api.wordnik.com/v4/words.json/randomWord?&minLength=5&maxLength=-1&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7";
const giphyAPI = "https://api.giphy.com/v1/gifs/search?rating=PG&api_key=dc6zaTOxFJmzC&q=";


function setup(){
  noCanvas();
  wordGIF();
}

function wordGIF(){
    // Getting data in JSON format
    fetch(wordnikAPI)
    .then(response => response.json())
    .then(json => {
        createP(json.word);
        return fetch(giphyAPI + json.word);
      })
    .then(response => response.json())
    .then(json => {
      createImg(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.error(err));
}

function draw(){
  background(51);
}
