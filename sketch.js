var dropzone;
function setup(){
  createCanvas(300, 300);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
}

function highlight(){
  dropzone.style('background-color', 'lightgray');
}

function unhighlight(){
  dropzone.style('background-color', 'white');
}
