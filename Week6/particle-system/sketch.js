var particles = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 20; i++) {
    particles.push(new Particle(createVector(random(width), random(height)), random(12, 40)));
  }
}

function draw() {
  background(51);

  var wind = createVector(0.01, 0.0);
  var gravity = createVector(0, 0.1);
  for (var i = 0; i < particles.length; i++) {

    particles[i].applyForce(wind);
    particles[i].applyForce(gravity);

    particles[i].update();
    particles[i].display();
    particles[i].checkEdges();
  }
}

// A simple Particle class
var Particle = function(position, mass) {
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.position = position;
  // not related to any unit of measurement, just a number
  this.mass = mass;
};

// Method to update position
Particle.prototype.update = function() {
  // velocity = velocity + acceleration
  this.velocity.add(this.acceleration);
  // position = position + velocity
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

// Method to display
Particle.prototype.display = function() {
  stroke(200);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, this.mass, this.mass);
};

Particle.prototype.checkEdges = function() {
  if (this.position.x > width) {
    this.position.x = width;
    this.velocity.x *= -1;
  } else if (this.position.x < 0) {
    this.velocity.x *= -1;
    this.position.x = 0;
  }

  if (this.position.y > height) {
    this.velocity.y *= -1;
    this.position.y = height;
  }
};

Particle.prototype.applyForce = function(force) {
  var f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};