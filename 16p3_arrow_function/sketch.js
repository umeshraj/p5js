function setup(){
  createCanvas(400, 300);
  background(0);
  let button = createButton('press');

  button.mousePressed(function (){
    background(random(255));
  });

}



