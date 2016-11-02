var diameter = 10;
var gap = 10;
var t = 0;
var dt = 0.1;
var amplitude = 120;
var frequency = 0.5;

function setup() { 
  createCanvas(800, 400);
} 

function draw() { 
  noStroke();
  background(255, 10);
  fill(255,0,0);
  
	for (var i = 0; i < width; i++)
  {

    ellipse(i*gap, amplitude*sin(frequency*(t+i)) + height/2, diameter, diameter);
  }
  t += dt;
}