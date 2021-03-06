function setup(){
  noCanvas();
  const counter1 = new Counter(100, 500);
  counter1.start();
  const counter2 = new Counter(500, 200);
  counter2.start();
  const counter3 = new Counter(1000, 1000);
  counter3.start();
}

class Counter{
  constructor(start, wait){
    this.count = 0;
    this.wait = wait;
    this.p = createP('');
  }
 
  start(){
    setInterval(()=>{ 
      this.countIt();     
    }, this.wait);
  }

  countIt(){
    this.count++;
    this.p.html(this.count);
  }
  
}