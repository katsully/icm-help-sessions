var vid;
var slider;
var inputColorVal = 1;

function setup() {
  createCanvas(400, 400);
  vid = createVideo('rotating_stack.mp4');
  vid.loop();
  vid.hide();
  
  // color slider
  createP('Brightness');
  slider = createSlider(-8, 8, 0);
  slider.input(updateValue);
}

function draw() {
  // background(220,100);
  image(vid);
  loadPixels();

  // noprotect
  for (var i = 0; i < pixels.length; i++) {
    pixels[i] = pixels[i] * inputColorVal;
  }
  updatePixels();
}

function updateValue(){
  if(this.value() >= 0){
    inputColorVal = this.value();
  } else {
    inputColorVal = 1/(this.value() * -1);
  }
}
  