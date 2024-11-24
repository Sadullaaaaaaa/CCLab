let img;


function preload() {
  img = loadImage("assets/colorful.jpg");
}


function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
}


function draw() {
  background(220);
  image(img, 0, 0);
}
