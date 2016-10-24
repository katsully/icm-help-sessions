var image1;
var image2;
var currentImg;
var tintIt = false;
var slider;

function preload() {
  image1 = loadImage("puppy1.jpg");
  image2 = loadImage("puppy2.jpg");
}

function setup() {
  createCanvas(200, 200);
  background(0);
  colorMode(HSB);
  currentImg = image1;

  var button = select('#button');
  var button2 = select('#tint');
  button.mousePressed(changePuppy);
  button2.mousePressed(addTint);
}

function draw() {
  if(tintIt) {
  	tint(slider.value(),100,100);
  }
  image(currentImg,0,0,200,200);
}

function changePuppy() {
  if(currentImg == image1){
    currentImg = image2;
  } else {
    currentImg = image1;
  }
}

function addTint(){
  slider = createSlider(0,360,0);
  select('#tint').hide();
  tintIt = true;
}