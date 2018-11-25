/// <reference path="./p5d/p5.global-mode.d.ts" />

let angle = 0;
let puppy;
let cam; 

function preload(){
  puppy = loadImage('images/puppy.jpeg');
}

function setup(){
  createCanvas(640, 480, WEBGL);
  cam = createCapture(VIDEO);
  cam.size(200, 200);
  cam.hide();
}

function draw(){
  background(128);

  // Camera functions
  // let x = random(-5, 5);
  // let y = random(-5, 5);
  // camera(x, y, (height/2)/tan(PI/6), x, y, 0, 0, 1, 0);

  // Perspective functions
  // let fov = map(mouseX, 0, width, 0, PI/3);
  // // let cameraZ = (height/2) / tan(fov/2.0);
  // let cameraZ = (height/2) / tan((PI/3)/2.0);
  // perspective(fov, width/height, cameraZ/10, cameraZ*10);
  // // perspective(fov, width/height, 0, 2000);

  // ortho();
  pointLight(255, 255, 255, 110, 110, 200);
    // ambientLight(255);
  // let dx = mouseX - width/2;
  // let dy = mouseY - height/2;
  // let vec = createVector(dx, dy, 0);
  // vec.normalize();
  // directionalLight(255, 255, 255, vec);

  for (let x=-100; x<100; x+=25){
    push();
    translate(x, 0, x+50);
    rotateZ(angle * 0.2);
    rotateY(angle * 0.3);
    rotateX(angle * 0.1);
    noStroke();
    // texture(cam);
    ambientMaterial(255);
    box(25);
    pop();        
  }
  

  // adding a plane
  translate(0, 100);
  rotateX(HALF_PI);
  ambientMaterial(51);
  plane(640, 480);


  angle += 0.07;
}
