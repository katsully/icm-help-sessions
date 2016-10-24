function setup() { 
  createCanvas(400, 400);
  rectMode(CENTER);
} 

function draw() { 
  background(220);
  drawCoolThing(100,100,100,5);
  drawCoolThing(300,300,200,7);
}

function drawCoolThing(x,y,startingSize,numRings){
  for(var i=0; i<numRings; i++){
    fill(0,40);
    rect(x,y,startingSize - (i*15), startingSize - (i*15));
  }
}