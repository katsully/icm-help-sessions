var limit;
var theta = 0.0;

function setup() { 
  createCanvas(600, 600);
  limit = 2 * PI;
} 

function draw() { 
  background(220);
  push();
  translate(width/2, height/2);
  rotate(theta);
	for(var i=0; i<limit; i+=PI/10){
		
    // make the length of lines random
    // step = int(random(0,100));
    
    step = 100;
    
    // map it to the mouse
    // step = map(mouseX, 0, width, 10, 300);
    
    // give the middle some space
		// px1 = 300+Math.sin(i)*30;
		// py1 = 300+Math.cos(i)*30;
		// px2 = 300+Math.sin(i)*(30+step);
		// py2 = 300+Math.cos(i)*(30+step); 
    
    px1 = Math.sin(i);
    py1 = Math.cos(i);
    px2 = Math.sin(i)*step;
    py2 = Math.cos(i)*step; 
	
		stroke(0,0,255);
		line(px1, py1, px2, py2);
	}	
  pop();
  
  theta += 0.01;
		
}