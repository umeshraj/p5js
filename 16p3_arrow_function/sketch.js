let counter1;

function setup(){
  noCanvas();
  counter1 = new Counter();
}

function draw(){
  counter1.countIt();
}

class Counter{
  constructor(){
    this.count = 0;
    this.p = createP('');
  }

  countIt(){
    this.count++;
    this.p.html(this.count);
  }
}

