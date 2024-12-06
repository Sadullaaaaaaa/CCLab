let particles = [];

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < notes.length; i++) {
    x = map(i, 0, notes.length, 50, 750);
    y = height / 2;

    particles.push(new Particle(x, y, x, notes[i]));
  }

}




function draw() {
  background(255);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.display();
    p.updateOsc();
  }
  fill(0);
  strokeWeight(0);

  if (mouseX < 100) {
    circle(20, 10, 20);
  } else if (mouseX >= 100 && mouseX < 800) {
    circle(200, 255, 270, 300);
  } else if (mouseX >= 300) {
    circle(40, 20, 255);
  }

}

// function keyPressed() {
// if (key === 'c') {
// Code to run.
// }

class Particle {
  constructor(x, y, rad, freq) {
    this.x = x;
    this.y = y;
    this.rad = rad;
    this.brightness = 0;
    //
    this.osc = new p5.Oscillator("sine");
    this.oscFreqValue = freq;
    this.oscAmpValue = 0.0;
    this.osc.start();
  }
  //function keyPressed() {
  //  if (key === 'c') {

  // }

  display() {
    push();
    fill(this.brightness);
    rect(0, 790, 600, 10);
    rect(0, 350, 600, 10);
    rect(0, 350, 10, 400);
    rect(590, 350, 10, 400);
    fill(0);
    rect(95, 350, 10, 400);
    rect(195, 350, 10, 400);
    rect(245, 350, 10, 400);
    rect(295, 350, 10, 400);
    rect(395, 350, 10, 400);
    rect(495, 350, 10, 400);
    rect(75, 350, 50, 200);
    rect(175, 350, 50, 200);
    rect(275, 350, 50, 200);
    rect(375, 350, 50, 200);
    rect(475, 350, 50, 200);
    pop();
  }


  checkMouse() {
    let distance = dist(this.x, this.y, mouseX, mouseY);
    this.brightness = map(distance, 0, 255, 0, true);
    this.oscAmpValue = map(distance, 0, 1.0, 0, true);
  }

  updateOsc() {
    this.osc.freq(this.oscFreqValue, 0.1);
    this.osc.amp(this.oscAmpValue, 0.2);
  }
}


let notes = [
  261.63, // C4
  293.66, // D4
  329.63, // E4

  349.23, // F4
  392.0, // G4
  440.0, // A4
  493.88, // B4
  523.25, // C5
  587.33, // D5
  659.25, // E5
  698.46, // F5
  783.99, // G5
  880.0, // A5
  987.77, // B5
  1046.5, // C6
  1174.66, // D6
  1318.51, // E6
  1396.91, // F6
  1567.98, // G6
  1760.0, // A6
  1975.53, // B6
  2093.0, // C7
];
