var a = 0.0;
var inc;

function setup() { 
  createCanvas(400, 400);
  inc = 2 * PI / 25.0;
} 

function draw() { 
  background(220);
  for(var i=0; i<400; i+=4){
    // ellipse(i, sin(a), 10, 10);
    ellipse(i+10, 200 + sin(a)*40, 10, 10);
    a += inc;
  }
}