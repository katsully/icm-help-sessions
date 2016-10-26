var capture;
var circles = [];

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();
}

function draw() {
  image(capture, 0, 0, 320, 240);
  background(0);
  for (var i=0; i<circles.length; i++) {
    circles[i].display();
  }
}


function mousePressed() {
  circles.push(new Circle(createVector(mouseX, mouseY)));
}

function mouseDragged() {
  circles.push(new Circle(createVector(mouseX, mouseY)));
}

function Circle(tempPos) {
  this.pos = tempPos;
}

Circle.prototype.display = function() {
  noStroke();
  var c = capture.get(this.pos.x, this.pos.y);
  fill(c);
  ellipse(this.pos.x, this.pos.y, 10, 10);
}