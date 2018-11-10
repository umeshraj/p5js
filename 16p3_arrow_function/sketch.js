let counter1;

function setup(){
  noCanvas();
  counter1 = new Counter(100, 500);
}

function draw(){
  counter1.countIt();
}

class Counter{
  constructor(start, wait){
    this.count = 0;
    this.p = createP('');
 
    setInterval(()=>{
      this.count++;
      this.p.html(this.count);
    } , wait);
  }
}