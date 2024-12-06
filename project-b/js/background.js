// Particles Exercise Template

let NUM_OF_PARTICLES = 25; // Decide the number of particles here.
let particles = [];

let noteImageFiles = [

    'assets/trebleclef.png',
    'assets/trebleclef.png',
    'assets/1.png',
    'assets/1.png',
    'assets/1.png',

    'assets/2.png',
    'assets/2.png',
    'assets/3.png',
    'assets/3.png',
    'assets/4.png',
    'assets/4.png',
    'assets/5.png',
    'assets/5.png',
    'assets/6.png',
    'assets/6.png',
    'assets/6.png',
    'assets/7.png',
    'assets/7.png',
    'assets/7.png',


    // feel free to add more!
];
let noteImages = [];

function preload() {
    for (let i = 0; i < noteImageFiles.length; i++) {
        let img = loadImage(noteImageFiles[i]);
        noteImages.push(img);
    }
}

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5-canvas-container");

    // generate particles
    for (let i = 0; i < NUM_OF_PARTICLES; i++) {
        let randomImage = random(noteImages);
        particles.push(new Particle(random(width), random(height), randomImage));
    }
}

function draw() {
    background('white');

    // update and display
    for (let i = 0; i < particles.length; i++) {
        let p = particles[i]; // "p" gets one object (instance) from the particles array with the index value "i"
        p.move();
        p.display();
        p.reappear();
    }
}

//

class Particle {
    constructor(x, y, img) {
        // properties
        this.x = x;
        this.y = y;
        this.xSpd = random(-10, 10);
        this.ySpd = random(-3, 3);
        this.dia = 60;
        this.img = img;
    }

    display() {
        push();
        translate(this.x, this.y);


        // Design the particle's appearance here.
        imageMode(CENTER);
        image(this.img, 0, 0, this.dia, this.dia)

        pop();
    }
    // methods
    reappear() {
        if (this.x < 0) {
            this.x = windowWidth;
        }
        else if (this.x > windowWidth) {
            this.x = 0;
        }
        if (this.y < 0) {
            this.y = windowHeight;
        }
        else if (this.y > windowHeight) {
            this.y = 0;
        }
    }
    move() {
        this.x += this.xSpd;
        this.y += this.ySpd;
    }

    checkMouse() {
        let distance = dist(this.x, this.y, mouseX, mouseY);
        this.brightness = map(distance, 0, this.img, 255, 0, true);
        this.oscAmpValue = map(distance, 0, this.img, 1.0, 0, true);
    }

    updateOsc() {
        this.osc.freq(this.oscFreqValue, 0.1);
        this.osc.amp(this.oscAmpValue, 0.1);
    }


}