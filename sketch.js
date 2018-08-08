var images=[];

function setup(){
  noCanvas();
  for (let idx=0; idx<5; idx++){
    let p = createP("This is a link: ");
    p.style("background-color", "#CCC");
    p.style("padding", '16px');

    var a = createA("#", 'apples');
    a.mousePressed(addPhoto);
    a.parent(p);
  }

  let button = select("#clear");
  button.mousePressed(clearStuff);
}

function clearStuff(){
  for (let im of images){
    im.remove();
  }
}

function addPhoto(){
  var img = createImg("images/flower.jpg");
  img.size(100, 100);
  img.parent(this.parent());
  // backup the images
  images.push(img);
}
