let notes_right = [60, 62, 64, 65, 67, 69, 71, 72, 74, 76,];
let keys_right = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "z", "x", "c", "v", "b", "n", "m"];
let osc

function setup() {
  createCanvas(600, 600);

  osc = new p5.Oscillator("sine"); // consier sine

  osc.start();
  osc.amp(0);
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


  // Draw a keyboard

  // The width for each key
  var w = width / 9;
  for (var i = 0; i < notes_right.length; i++) {
    var x = i * w;
    // If the mouse is over the key
    if (mouseX > x && mouseX < x + w && mouseY < height) {
      // If we're clicking
      if (mouseIsPressed) {
        fill(100, 255, 200);
        // Or just rolling over
      } else {
        fill(127);
      }
    } else {
      fill(200);
    }


    // Draw the key
    rect(x, 300, w / 5, height / 5);
  }

}




function keyPressed() {
  for (let i = 0; i < keys_right.length; i++) {
    let keyLetter = keys_right[i];
    if (key == keyLetter) {
      playNote(notes_right[i]);
    }
  }
}

// Fade it out when we release
function keyReleased() {
  osc.fade(0, 0.5);

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




