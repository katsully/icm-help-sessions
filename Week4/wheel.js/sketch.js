var limit = 360;
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;
var theta = 0.0;
var step = 100;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
    // line(0,width/2+120,width, width/2+100);
  push();
  translate(width/2, height/2);
  rotate(theta);
  noFill();

  // ellipse(0,0,200,200);
  // ellipse(0,0,220,220);
  for (var i = 0; i < limit; i += 18) {
    
    step = map(mouseX, 0, width, 50, 300);
    // step = mouseX;
    
    // inner points
    x1 = sin(radians(i));
    y1 = cos(radians(i));

    // outer points
    x2 = sin(radians(i)) * step;
    y2 = cos(radians(i)) * step;

    stroke(0,0,255);
    line(x1, y1, x2, y2);
  }
  pop();
  theta += 0.01
}