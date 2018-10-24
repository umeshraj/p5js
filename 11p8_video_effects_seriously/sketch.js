let video;

function setup(){
  canvas = createCanvas(400, 300, WEBGL);
  background(51);
  video = createCapture(VIDEO);
  video.size(400, 300);
  video.id('p5video');
  canvas.id('p5canvas');

  let seriously = new Seriously();
  let src = seriously.source('#p5video');
  let target = seriously.target('#p5canvas');
  let blur = seriously.effect('blur');

  blur.source = src;
  target.source = blur;

  seriously.go()
}
