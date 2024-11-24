//let NUM_OF_PARTICLES = 1000; // Decide the initial number of particles.
let particles = [];
//let rocket = [];

let rocket;//introduction of the rocket

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.parent("p5-canvas-container");
  background(0, 50);

  rocket = new Rocket(mouseX, mouseY);

  // generate particles
  for (let i = 0; i < 200; i++) {//number of particles less than
    let x = 415;
    let y = 310;
    let r = random(1, 10);
    particles.push(new Particle(x, y, r));
  }

}

function draw() {
  background(0, 50);
  // consider generating particles in draw(), using Dynamic Array
  // ===update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    // p.update();
    p.move();
    p.reappear();
    p.display();
    p.update();
  }
  rocket.display();
  rocket.update();



}

//

class Particle {
  // constructor function
  constructor(x, y, rad) {
    // properties (variables): particle's characteristics
    this.x = 400;
    this.y = 320;
    this.xSpeed = random(-1, 1);//speed
    this.ySpeed = random(-2.1, -1);//speed of smoke
    this.rad = rad;
    this.r = random(207);
    this.g = random(16);
    this.b = random(20, 90);
    //this.lifetime = 207;// lifetime of the particles
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  // methods (functions): particle's behaviors
  reappear() {
    // (add) 
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = 415;
      this.y = 310;
    }
  }
  update() {
    //this.lifetime -= 0.5;//fading away effect of the particles
  }
  display() {
    // particle's appearance
    push();
    noStroke();
    fill(255, this.lifetime);
    circle(this.x, this.y, this.rad * 1);
    circle(this.x, this.y, this.rad * 1.5);
    circle(this.x, this.y, this.rad * 1.2);
    pop();
  }

}

class Rocket {
  constructor(x, y) {
    this.x = mouseX;
    this.y = mouseY;
  }
  display() {
    push();

    fill(210, 195, 255);
    rect(this.x + 400, this.y + 600, this.x + 30, this.y - 300);
    rect(this.x + 100, this.y + 600, this.x + 330, this.y - 100);
    pop();
  }
  update() {

  }

}



