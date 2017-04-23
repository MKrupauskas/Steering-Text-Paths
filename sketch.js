// MykolasK 2017.04.02
// Steering text paths
// Inspired by Daniel Shiffman

var font;
var vehicles = [];
var word = 'Patyčioms';
var textBool = false;
var points2, pt;
var points, pt2;
var vehicle;
var testing;
var eggg = "('_')_/¯", egggg = "¯\_";

//getElementById("easterEgg").click = function() document.getElementById("textInput").value; = "¯\_('_')_/¯"};
var el = document.getElementById("egg");
if (el) {
el.addEventListener('click', clickCheck);
}

function clickCheck(){
  document.getElementById("textInput").value = egggg + eggg;
}


function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  colorMode(HSB);
  createCanvas(1000, 300);

  points2 = font.textToPoints(word, 50, 200, 192, {sampleFactor: 0.25});

  for (var i = 0; i < points2.length; i++) {
    pt = points2[i];
    vehicle = new Vehicle(random(width), -5);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(2, 70, 70);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

function mousePressed() { // Mouse button functionality
  word = document.getElementById("textInput").value;
  if (mouseX < 295 || mouseY < -73 || mouseX > 645 ||  mouseY > -45) {
    points2 = font.textToPoints(word, 50, 200, 192, {sampleFactor: 0.25});

    for (var i = 0; i < vehicles.length; i++) {
      vehicles[i].newTarget(random(width), -5);
    }
    for (var i = 0; i < points2.length; i++) {
      pt = points2[i];
      vehicles[i].newTarget(pt.x, pt.y);
    }
  }
}
function keyPressed () { // Spacebar functionality

  if (keyCode === 32) {
    points = font.textToPoints("STOP", 250, 200, 192, {sampleFactor: 0.25});

      for (var i = 0; i < vehicles.length; i++) {
        vehicles[i].newTarget(random(width), -5);
      }
      for (var i = 0; i < points.length; i++) {
        pt2 = points[i];
        vehicles[i].newTarget(pt2.x, pt2.y);
      }
  }
}
