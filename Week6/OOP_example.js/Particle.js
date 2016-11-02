function Particle (x,y) {
  
  this.x = x;
  this.y = y;
  this.speedX = random(-3,3);
  this.speedY = random(-3,3);
  this.col = color(random(255), random(255), random(255));
  this.diam = random(3,15);
  
  this.render = function(){
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.diam, this.diam);
  }
  
  this.move = function(w,h){
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
    if (this.x > w || this.x < 0) this.speedX *= -1;
    if (this.y > h || this.y < 0) this.speedY *= -1;
    
  }
  

  
  
  
  
}