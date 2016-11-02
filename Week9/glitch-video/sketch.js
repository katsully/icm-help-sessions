var vid, vid2, vid3;
var slider, redSlider;
var inputColorVal = 1;

function setup() {
  createCanvas(400, 400);
  
  vid = createVideo('rotating_stack.mp4');
  vid.loop();
  vid.hide();

  vid2 = createVideo('rotating_stack.mp4');
  vid2.loop();
  vid2.speed(2);
  vid2.hide();

  vid3 = createVideo('rotating_stack.mp4');
  vid3.speed(3);
  vid3.loop();
  vid3.hide();
}

function draw() {
  background(255);

  image(vid3);
  tint(255, 127);
  image(vid2);
  tint(255, 127);
  image(vid);
}