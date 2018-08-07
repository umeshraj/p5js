var happy = ['rainbow', 'unicorn', 'books', 'ml', 'math', 'purple', 'chocolate'];
function setup(){
  noCanvas();
  var button = select("button");
  button.mousePressed(addItem);
}

function addItem(){
  var r = random(happy);
  var li = createElement('li', r);
  li.parent("#happylist");
}
