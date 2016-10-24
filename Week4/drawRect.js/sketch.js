var startX;
var startY;
var bubbles = [];

function preload(){
  img = loadImage('puppy.jpeg',30,30);
  // img.re
}

function setup() { 
  createCanvas(400, 400);
  startX = width;
  startY = height;
  rectMode(CORNERS);
  for(var i=0; i<50; i++) {
    var tempBubble = new Bubble(random(width), random(height));
    bubbles.push(tempBubble);
  }
} 

function draw() { 
  background(220);
  if(startX !== width && startY !== height){
    noFill();
    stroke(0);
    rect(startX, startY, mouseX, mouseY);
  }
  for(var i=0; i<bubbles.length; i++){
      if(bubbles[i].x > startX && bubbles[i].x < mouseX && bubbles[i].y > startY && bubbles[i].y < mouseY){
      	bubbles[i].drawCircle = false;
      } else {
        bubbles[i].drawCircle = true;
      }
    	bubbles[i].render(img);
    }
}

function mousePressed(){
  startX = mouseX;
  startY = mouseY;
}