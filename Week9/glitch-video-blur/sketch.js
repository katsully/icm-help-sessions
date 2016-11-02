// Inspired by an example from Allison Parish

var vid;
var blur = 1;
var slider;

function setup() {
  createCanvas(400, 400);
  vid = createVideo("rotating_stack.mp4");
  vid.loop();
  vid.hide();
  noStroke();
  
  createP('Blur Amount');
  slider = createSlider(1,20,1);
}
function draw() {
  background(0);
  vid.loadPixels();
  // noprotect
  for (var y = 0; y < height; y += 8) {
    for (var x = 0; x < width; x += 8) {
      var offset = ((y*width)+x)*4;
      fill(vid.pixels[offset],
        vid.pixels[offset+1],
        vid.pixels[offset+2]);
      rect(x, y, slider.value(), slider.value()); 
    }
  }
}