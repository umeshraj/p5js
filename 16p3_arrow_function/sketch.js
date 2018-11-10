function setup(){
  createCanvas(400, 300);
  background(0);
  let button = createButton('press');

  button.mousePressed(() => {
    background(random(255));
  });

}



