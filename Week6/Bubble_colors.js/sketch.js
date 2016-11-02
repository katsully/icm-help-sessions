myBubbles = [];

function setup() { 
  createCanvas(400, 400);
  
    for (var i = 0; i < 10; i++)
    {
      var tempBubble = new Bubble();
      myBubbles.push(tempBubble);
    }


} 

function mousePressed(){

  for (var i = 0 ; i < myBubbles.length; i++)
  {
    myBubbles[i].clicked(mouseX, mouseY);
  }
  
}

function draw() { 
  background(220);
  
  for (var i = 0; i < myBubbles.length; i++)
  {
    myBubbles[i].display();
    myBubbles[i].move();
  }
}

function Bubble() {
  
  this.x = random(0,400);
  this.y = random(0,400);
  this.radius = random(15,25);
  this.col = color(255);
  
  
  this.move = function(){
    
    this.x += random(-2,2);
    this.y += random(-2,2);
    
  }
  
  this.display = function()
  {
    fill(this.col);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }
  
  this.clicked = function(x, y){
    
    var d = dist(x,y,this.x,this.y)
    if ( d < this.radius)
    {
    this.col = color(random(255), random(255), random(255));  
    }
  }
  
}