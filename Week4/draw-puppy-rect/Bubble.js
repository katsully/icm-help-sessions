function Bubble(x,y){
  this.x = x;
  this.y = y;
  this.col = color(255,0,0);
  this.drawCircle = true;
  
  this.render = function(img){
    if(this.drawCircle){
    	fill(this.col);
    	ellipse(x,y,25,25);
    } else{
      // fill(this.col);
    	// ellipse(x,y,25,25);
      image(img,x,y,25,25);
    }
  };
}