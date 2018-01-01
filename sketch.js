// MykolasK 2017.04.02
// Steering text paths
// Inspired by Daniel Shiffman

let font;
let vehicles = [];
let word = "Patyčioms";
let textBool = false;
let points2, pt;
let points, pt2;
let vehicle;
const easterEgg = "¯\\_('_')_/¯";
const center = [450, 390, 340, 300, 270, 210, 160, 90, 50, 30, 110];

function preload() {
  font = loadFont("AvenirNextLTPro-Demi.otf");
}

function setup() {
  colorMode(HSB);
  createCanvas(1000, 300);

  document.getElementById("header").onclick = function() {
    document.getElementById("textInput").value = easterEgg;
    mousePressed();
  }; // Easter egg

  points2 = font.textToPoints(word, 50, 200, 192, { sampleFactor: 0.25 });

  for (let i = 0; i < points2.length; i++) {
    pt = points2[i];
    vehicle = new Vehicle(random(width), -5);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(2, 70, 70);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mousePressed() {
  // Mouse button functionality
  word = document.getElementById("textInput").value;
  if (mouseX < 295 || mouseY < -73 || mouseX > 645 || mouseY > -45) {
    points2 = font.textToPoints(word, center[word.length - 1], 200, 192, {
      sampleFactor: 0.25
    });

    for (let i = 0; i < vehicles.length; i++) {
      vehicles[i].newTarget(random(width), -5);
    }
    for (let i = 0; i < points2.length; i++) {
      pt = points2[i];
      vehicles[i].newTarget(pt.x, pt.y);
    }
  }
}
function keyPressed() {
  // Spacebar functionality
  if (keyCode === 32) {
    points = font.textToPoints("STOP", 250, 200, 192, { sampleFactor: 0.25 });

    for (let i = 0; i < vehicles.length; i++) {
      vehicles[i].newTarget(random(width), -5);
    }
    for (let i = 0; i < points.length; i++) {
      pt2 = points[i];
      vehicles[i].newTarget(pt2.x, pt2.y);
    }
  }
}

