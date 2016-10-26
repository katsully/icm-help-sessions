var capture;

function setup() {
  createCanvas(320, 240);
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  // capture.hide();
}

function draw() {
  background(255);
  image(capture, 0, 0, 320, 240);
  // possible filters, THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE(needs 2nd param), BLUR(needs 2nd param), ERODE, or DILATE
  filter('BLUR', 4);
}

