/// <reference path="./p5d/p5.global-mode.d.ts" />

let vals = [5, 4, 4, 2, 1];
console.log(vals);
vals.sort();
console.log(vals);

// String example
let string = ["a", "hello", "B", "goodbye"];
console.log(string);
string.sort();
console.log(string);

// Sorting objects
let objects = [{x: 5, y:6}, {x:2, y:10}];
console.log(objects);
console.log("Without comparisong fn: ")
objects.sort();
console.log(objects);

function compareXY(a, b){
  return a.y - b.y;
}

objects.sort(compareXY);
console.log("After using compareXY fn in sort:")
console.log(objects);

// Another string example
let sentence = "It   was  a dark and stormy  night";
let words = sentence.split(" ").filter(s => s.length > 2)
console.log(words);
// sorting alphabetically
console.log("Sorting alphabetically: ")
words.sort();
console.log(words);

// sorting by length of words
function compareWordLen(x, y){
  return (x.length - y.length);
}

console.log("Sorting by word length");
words.sort(compareWordLen);
console.log(words);

// arrow fn
console.log("Reverse sort by word length + arrow fn")
words.sort((a,b) => b.length-a.length);
console.log(words)