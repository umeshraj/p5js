function setup(){
  createCanvas(400, 300);
  background(0);
  let button = createButton('press');

  button.mousePressed(changeBackground);
}

function changeBackground(){
  background(random(255));
}



