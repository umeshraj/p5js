function setup(){
  createCanvas()
  for (let idx=0; idx<100; idx++){
    let p = createP('apples');
    let x = random(windowWidth);
    let y = random(windowHeight);
    p.position(x, y);
    p.class('apple');
  }

  for (let idx=0; idx<100; idx++){
    let p = createP('blueberries');
    let x = random(windowWidth);
    let y = random(windowHeight);
    p.position(x, y);
    p.class('blueberries');
  }

}
