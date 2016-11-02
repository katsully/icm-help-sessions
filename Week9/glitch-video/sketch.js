var cap;
function setup() {
  createCanvas(400, 400);
  cap = createCapture(VIDEO);
  cap.hide();
  rectMode(CENTER);
  noStroke();
}
function draw() {
  background(50);
  fill(255);
  cap.loadPixels();
  for (var cy = 0; cy < cap.height; cy += 10) {
    for (var cx = 0; cx < cap.width; cx += 5) {
      var offset = ((cy*cap.width)+cx)*4;
      var xpos = (cx / cap.width) * width;
      var ypos = (cy / cap.height) * height;
      rect(xpos, ypos, 10,
        10 * (cap.pixels[offset+1]/255));
    }
  }
}