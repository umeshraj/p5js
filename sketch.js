function setup(){
  createCanvas()
  for (let idx=0; idx<5; idx++){
    let p = createA('#', 'apples');
    let x = random(windowWidth);
    let y = random(windowHeight);
    p.position(x, y);
    p.class('apple');
  }

  for (let idx=0; idx<5; idx++){
    let p = createA('#', 'blueberry');
    let x = random(windowWidth);
    let y = random(windowHeight);
    p.position(x, y);
    p.class('blueberry');
    p.mousePressed(changeClass);
  }

}

function changeClass(){
  this.removeClass('blueberry')
  this.class('apple');
}
