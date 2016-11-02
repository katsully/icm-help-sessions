var xPos, yPos; // x and y positions of the ellipse
var radius = 100; // radius of the ellipse

var rectX, rectY; // position of the rectangle
var rectW, rectH; // width and height of the rectangle

var isPressed = false;

function setup() {
  createCanvas(800, 800);

  // set the ellipse's position
  xPos = 120;
  yPos = 120;

  // set
  rectX = width / 2;
  rectY = height / 2;

  rectW = 150;
  rectH = 100;
}

function draw() {
  background(240);


  // d is going to represent the distance between the center of the
  // the circle and the mouse's position
  var d = dist(xPos, yPos, mouseX, mouseY);
  
  // line(xPos, yPos, mouseX,mouseY);

  if (d < radius && isPressed) {
    fill(255, 0, 0);
  } else {
    noFill();
  }

  ellipse(xPos, yPos, radius * 2, radius * 2);

  if (mouseX > rectX && mouseX < rectX + rectW && mouseY > rectY && mouseY < rectY + rectH) {
    fill(0, 255, 0);
  } else {
    noFill();
  }

  rect(rectX, rectY, rectW, rectH);
	
}

function mousePressed(){
 // println('true'); 
  isPressed = !isPressed; // set value to opposite of current value
  println(isPressed);
}