let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new Sadullas_Dancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class Sadullas_Dancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    // add properties for your dancer here:

    // Properties for body parts
    //this.angle = 0;
    this.armLength = 10;
    //this.mainBody
    //this.smile?????????????
    this.mouthHeight = 20;

    this.bodyW = 200;

    this.bodyH = 60;

    this.legHeight = 60;
    this.eyeSize = 20;
    this.mouthWidth = 80; // wid

    this.angleSpeed = 10;

    this.jumpHeight = 30; //jump like in a  disco
    this.jumpSpeed = 2;
    this.isJumpingUp = true;

    this.armAngle = 0; // угол наклона
    this.armWavingSpeed = 0.15; // armsss wave speed?
  }

  update() {

    // this.angle += this.angleSpeed;
    this.armAngle = cos(frameCount * this.armWavingSpeed) * 0.05; // ruki dvijeniye
    // breakdance effect
    if (this.isJumpingUp) {
      this.y -= this.jumpSpeed;
      if (this.y <= height / 2 - this.jumpHeight) {
        this.isJumpingUp = false;
      }
    } else {
      this.y += this.jumpSpeed;
      if (this.y >= height / 2) {
        this.isJumpingUp = true;
      }
    }
  }

  display() {

    push();
    translate(this.x, this.y);


    // ******** //
    // ⬇️ draw your dancer from here ⬇️



    // ********BODY*******
    fill(150, 100, 255);
    noStroke();
    arc(0, 0, this.bodyW, this.bodyH, PI, 0, CHORD); // u-shaped body mosters university inspiration
    rotate(this.armAngle);
    // Arms??? (rectangular random shape)
    push();
    translate(-this.bodyW / 5, -this.bodyH / 1);
    rotate(this.armAngle);
    fill(150, 100, 255);
    rect(0, 0, this.armLength, 50); // left arm
    ellipse(this.armLength - 5, 5, 15, 15); // left hand
    pop();

    push();
    translate(this.bodyW / 5, -this.bodyH / 1);
    rotate(-this.armAngle);
    fill(150, 100, 255);
    rect(0, 0, this.armLength, 50); // right ar
    ellipse(this.armLength - 5, 5, 15, 15); // right hand
    pop();




    // hands- circualr shaped top of the arms
    // ellipse(-this.bodyW / 4.5 - th
    // ellipse()

    //bodymain


    // legzzz liangge rectangles
    rect(-30, this.bodyH / 2, 20, this.legHeight); // l
    rect(10, this.bodyH / 2, 20, this.legHeight); // r

    // eyesssss two ellipses
    fill(255);
    ellipse(-30, -this.bodyH / 3, this.eyeSize, this.eyeSize); // l
    ellipse(30, -this.bodyH / 3, this.eyeSize, this.eyeSize); // right

    fill(0); // color of the retina
    ellipse(-30, -this.bodyH / 3, this.eyeSize / 3, this.eyeSize / 3); // l
    ellipse(30, -this.bodyH / 3, this.eyeSize / 3, this.eyeSize / 3); //r

    // MOUTH
    fill(255);
    arc(0, 10, this.mouthWidth, this.mouthHeight, 0, PI);

    this.drawReferenceShapes();







    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/