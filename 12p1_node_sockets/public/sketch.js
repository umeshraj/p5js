var socket;
function setup(){
  createCanvas(400, 300);
  background(51);

  socket = io.connect('http://localhost:3000');
}

function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);
  var data = {
    x: mouseX,
    y: mouseY
  };
  socket.emit('mouse', data);
  noStroke();
  fill(255);
  ellipse(mouseX, mouseY, 60, 60);
}

function draw(){
}
