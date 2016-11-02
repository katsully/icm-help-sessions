var xCoord, yCoord;
var rad = 150;
var theta = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220,0);
  fill(0);
  // x =  rad * sin(theta)
  // y = rad * cos(theta)
  push();
  translate(width/2, height/2);
 
  xCoord = rad * cos(theta);
  yCoord = rad * sin(theta);
  //line(0,0,xCoord,yCoord);
  ellipse(xCoord, yCoord, 2,2);
  pop();
  
  theta += 0.05;
  rad -= 0.15;
  
}
