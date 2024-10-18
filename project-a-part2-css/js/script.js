

function setup(){
    let canvas = createCanvas(800, 500);
    canvas.parent("p5-canvas-Container");
}
var gray = [];
var diameter = 20;
var wormPos;
var time;

function setup() {
  
  createCanvas(800, 500);
  

  // Dormammu lines
  for (var i = 1; i < width; i++) {
    gray[i] = random(0, 255);
  }

  // wormd starting position
  wormPos = createVector(width / 2, height / 2);
  time = 0.0;
  
}

//DRAWWWWWWWW
function draw() {
  
  background(220);

  updateBackgroundLines();

  updateWorm();
 
}
//Dormamu lines effect
function updateBackgroundLines() {
  for (var i = 0; i < gray.length; i++) {
    gray[i] = (gray[i] + 1) % 205; //color change
    stroke(gray[i]);

    var lineOffset = sin(i + frameCount * 0.05) * 15; //ramki
    line(i, 0 + lineOffset, i, height + lineOffset);
  }
}
function updateWorm() {
  stroke(0, 120);
  strokeWeight(100);
  
 



  ///NORMAL WORM

  translate(width/2, height / 2);
  // point(0, 0)

  time += 0.01;

  var step = 10,
    radius = 200;

  for (i = 0; i <= step; i++) {
    var rad = (i / step + time) * 1;
    //print(rad)
    radius += sin(rad * 6) * 5;
    point(cos(rad) * radius, sin(rad) * radius);
  }
  //MAIN CHARACTER
  // rect(350, 400, 100, 100);//body
  //ellipse(400, 370, 60,80);//head
  //  rect(280, 400, 70, 30);//left hand
  //  rect(255, 350, 30, 70);//left arm

  // Sketch of person from back
}
