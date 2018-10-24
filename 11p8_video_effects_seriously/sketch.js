let video;
let slider;

function setup(){
  canvas = createCanvas(400, 300, WEBGL);
  background(51);
  video = createCapture(VIDEO);
  video.size(400, 300);
  video.id('p5video');
  video.hide();
  canvas.id('p5canvas');
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.id('blur_slider')

  let seriously = new Seriously();
  let src = seriously.source('#p5video');
  let target = seriously.target('#p5canvas');
  let blur = seriously.effect('blur');
  blur.amount = '#blur_slider';
  blur.source = src;
  target.source = blur;

  seriously.go()
}
