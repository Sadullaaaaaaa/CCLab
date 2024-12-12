let notes_right = [60, 61, 62, 64, 65, 67, 69, 71, 72, 74, 76, 38, 40, 42, 44, 46, 48, 50, 52];
let keys_right = ["q", "2", "w", "e", "r", "t", "y", "u", "i", "o", "p", "z", "x", "c", "v", "b", "n", "m"];
let osc
let img

keyPressforlines = false

let x, y;

let keyIndex = -1;




function setup() {
  createCanvas(windowWidth, windowHeight);

  osc = new p5.Oscillator("sine"); // consier sine

  osc.start();
  osc.amp(0);

  x = 0;
  y = height / 2;


}

function playNote(note, duration) {
  osc.freq(midiToFreq(note));

  osc.fade(0.5, 0.2);

  if (duration) {
    setTimeout(function () {
      osc.fade(0, 0.2);
    }, duration - 50);
  }
}

function draw() {

  let w = 57;
  for (let i = 0; i < notes_right.length; i++) {
    if (i == keyIndex) {
      fill(100, 255, 200);
    } else {
      fill(200);
    }
    let x = i * w;
    rect(x + 250, 600, 100, 700);
  }

  //Draw the DJ SET!!
  //  circle(1400, 600, 45)
  if (mouseX > 1400, mouseY > 600) {
    fill(100, 255, 200);
    // notations floating
  } else {
    fill(127);
  }





  if (keyPressforlines) {
    let xFreq = frameCount * 0.005 + 1000; // 1000 is arbitrary offset
    let yFreq = frameCount * 0.005;
    x = noise(xFreq) * width;
    y = noise(yFreq) * height - 100;

    fill(0);


    circle(x, y, 2);
    line(x, y, x + 5, y + 5)

    if (random() < 0.01) {
      // with 1%
      fill('black');
      circle(x + random(-20, 20), y + random(-20, 20), + random(5, 10));
      line(x + random(-20, 20), y + random(-20, 20), + x + 10, y + 10);
    }
    if (random() < 0.03) {
      // with 1%
      fill('black');
      line(x + random(-20, 20), y + random(-20, 20), + x + 10, y + 15);
    }

    if (random() < 0.03) {
      push();
      // with 1%
      noStroke();
      fill('red');
      circle(x + random(-20, 20), y + random(-20, 20), + random(1, 5));
      pop();
    }


  }

}

function keyPressed() {
  for (let i = 0; i < keys_right.length; i++) {
    let keyLetter = keys_right[i];
    if (key == keyLetter) {
      playNote(notes_right[i]);
      keyIndex = i;
      keyPressforlines = true;
    }
  }
}

// Fade it out when we release
function keyReleased() {
  osc.fade(0, 0.5);
  keyPressforlines = false;

}


let noteFreqs = [
  // Octave 2
  65.41,   // C2
  73.42,   // D2
  82.41,   // E2
  87.31,   // F2
  98.00,   // G2
  110.00,  // A2
  123.47,  // B2
  // Octave 3
  130.81,  // C3
  146.83,  // D3
  164.81,  // E3
  174.61,  // F3
  196.00,  // G3
  220.00,  // A3
  246.94,  // B3
  // Octave 4
  261.63,  // C4
  293.66,  // D4
  329.63,  // E4
  349.23,  // F4
  392.00,  // G4
  440.00,  // A4
  493.88,  // B4
  // Octave 5
  523.25,  // C5
  587.33,  // D5
  659.25,  // E5
  698.46,  // F5
  783.99,  // G5
  880.00,  // A5
  987.77,  // B5
  // Octave 6
  1046.50, // C6
  1174.66, // D6
  1318.51, // E6
  1396.91, // F6
  1567.98, // G6
  1760.00, // A6
  1975.53, // B6
  // Octave 7
  2093.00, // C7
  2349.32, // D7
  2637.02, // E7
  2793.83, // F7
  3135.96, // G7
  3520.00, // A7
  3951.07  // B7
];




