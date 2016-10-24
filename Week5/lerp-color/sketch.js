function setup() { 
  createCanvas(400, 400);
  rectMode(CENTER);
} 

function draw() { 
  background(220);
  drawCoolThing(100,100,100,color(100,200,0),color(255,0,255));
  drawCoolThing(300,300,200,color(234,12,23),color(34,123,255));
}

function drawCoolThing(x,y,startingSize,fromColor,toColor){
  for(var i=0; i<5; i++){
    var interA = lerpColor(fromColor, toColor, i*0.2);
    fill(interA);
    rect(x,y,startingSize - (i*15), startingSize - (i*15));
  }
}