var deg = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  fill(0,255,0);
  
  push();
  translate(mouseX,mouseY);
  rotate(radians(deg));
  rectMode(CENTER);
  rect(0,0,100,100);
  pop();
  
  ellipse(120, 120, 30,30);
	ellipse(140, 140, 20,20);
  ellipse(160, 160, 10,10);

  
  // deg++ SAME AS deg = deg + 1
  deg++;
}