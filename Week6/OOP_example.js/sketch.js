var myParticles = [];

function setup() { 
  createCanvas(800, 800);
} 

function mouseDragged() {
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

function draw() { 
  background(220);
  
  for (var i = 0; i < myParticles.length; i++)
  {
   	myParticles[i].move(width,height);
    myParticles[i].render();
  }
}

function keyPressed()
{
 	if (keyCode === DOWN_ARROW){
    
    myParticles.pop();
   println('myParticles length is now: ' + myParticles.length); 
  }
}