function setup() {
	var myCan = createCanvas(windowWidth, windowHeight);

  colorMode(HSB);
  background(random(360), 100, 100);

	strokeWeight(10)
	stroke(0);
}

function draw() {
  if (accelerationX > 50){
    background(random(360), 100, 100);
  }
}

function touchMoved() {
	line(touchX, touchY, ptouchX, ptouchY);
	return false;
}

function touchEnded() {
  stroke(random(360), 100, 100);
}