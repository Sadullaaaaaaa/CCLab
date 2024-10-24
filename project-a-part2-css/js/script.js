
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-Container");
  angleMode(DEGREES);
}

function draw() {
  background(0); // Clear the background every frame

  // Draw the worm following the mouse
  drawCreature(mouseX, mouseY, 200);

  // Draw background lines
  drawBackgroundLines();

  // Draw the terrain
  drawTerrain(); // Draw the near terrain
  drawFarTerrain(); // Draw the far terrain
}

function drawBackgroundLines() {
  for (let x = 0; x < width; x += 4) {
    let alpha = map(sin(x * 0.5 + frameCount * 2.0), -1, 1, 0, 255);
    stroke(random(0, 100), alpha);
    strokeWeight(random(1, 15));
    line(x, 0, x, height);
  }
}

function drawTerrain() {
  let startY = height - 70; // Base y-position of the near terrain
  let amp = 80; // Amplitude of the sine wave (height of the peaks)
  let freq = 0.32; // Frequency of the sine wave (space between peaks)

  // Draw multiple sine waves to create a dune effect
  for (let i = 0; i < 100; i++) { // More lines for denser dunes
    let offsetY = i * random(1, 13); // Space between each line
    stroke(200);
    fill('gray');

    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let y = startY + cos(x * freq + frameCount * 0.22) * amp + offsetY;
      vertex(x, y);
    }
    endShape(); // Close the shape
  }
}

// New function to draw far terrain
function drawFarTerrain() {
  let startY = height - 100; // Base y-position of the far terrain
  let amp = 120; // Amplitude of the sine wave (smaller height for the far terrain)
  let freq = 0.2; // Lower frequency for less dense waves

  // Draw multiple sine waves for the far terrain
  for (let i = 0; i < 50; i++) { // Fewer lines for less dense dunes
    let offsetY = i * random(0, 10); // Space between each line
    stroke(100); // Darker color for the far terrain
    noFill();

    beginShape();
    for (let x = 0; x <= width; x += 10) {
      let y = startY + sin(x * freq + frameCount * 0.1) * amp + offsetY;
      vertex(x, y);
    }
    endShape(); // Close the shape
  }
}

function drawCreature(x, y, rad) {
  push();
  translate(x, y);

  fill("black");
  stroke(100);
  circle(0, 0, 430); // Outer circle of the worm

  // Inner circles of the worm
  for (let i = 0; i < 10; i++) {
    let brightness = map(i, 0, 9, 80, 0); // Mouth darkness
    let dia = map(i, 0, 9, rad * 2, rad / 2);
    noStroke();
    fill(brightness);
    circle(0, 0, dia);
  }

  // Draw the teeth
  drawTeeth(40, 180, 12, -0.05);
  drawTeeth(80, 190, 18, 0.2);
  drawTeeth(100, 200, 30, 0.1);

  pop();
}

function drawTeeth(radIn, radOut, angleInc, rotSpd) {
  push();
  rotate(frameCount * rotSpd);

  for (let angle = 0; angle < 360; angle += angleInc) {
    // Inner position
    let baseDist1 = radIn;
    let pulse = sin(frameCount * 3 + angle * 12) * 30;
    let radDist1 = baseDist1 + pulse;
    let x1 = cos(angle) * radDist1;
    let y1 = sin(angle) * radDist1;

    // Outer positions
    let radDist2 = radOut;
    let thickness = 4;
    let x2 = cos(angle - thickness) * radDist2;
    let y2 = sin(angle - thickness) * radDist2;
    let x3 = cos(angle + thickness) * radDist2;
    let y3 = sin(angle + thickness) * radDist2;

    fill(255);
    stroke(0);
    strokeWeight(2);
    triangle(x1, y1, x2, y2, x3, y3);
  }

  pop();
}
