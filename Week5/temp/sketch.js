function setup() {
  createCanvas(200, 200);
  background(255);
  text('Temperature in °C: 13', 0, 50);
  var temp = CtoF(13);
  text('Temperature in °F: ' + temp, 0, 100);
}

function CtoF(tempC){
  //F° = (C° × 1.8) + 32
  var tempF = (tempC * 1.8) + 32;
  return tempF;
}