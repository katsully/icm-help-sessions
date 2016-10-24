function setup() {
  createCanvas(200, 200);
  background(255);
  noStroke();
  colorMode(HSB, 255);
  for(var i=0;i<3;i++){
    iceCream(55*i+20,100,20);
  }
}

function iceCream(x, y, diameter) {
  fill(random(360), 112, 331);
  arc(x, y, diameter, diameter, -PI, 0);
  fill('#d7c38e');
  triangle(x - diameter / 2, y + 5, x + diameter / 2, y + 5, x, y + diameter * 1.3);
}