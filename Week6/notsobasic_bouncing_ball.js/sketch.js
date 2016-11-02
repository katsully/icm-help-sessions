var ball1 = { 
	rad: 50, 
	xPos: 200, 
	yPos: 200,
	xSpeed: 3,
	ySpeed: 1,
	
	drawBall: function(){
				fill(255,0,0);
				ellipse(this.xPos, this.yPos, this.rad, this.rad);	
		},
	
	moveBall: function(){
	
			this.xPos += this.xSpeed;
			this.yPos += this.ySpeed;

			if (this.xPos > width || this.xPos < 0)  
			{
				this.xSpeed = -this.xSpeed;
			}

			if (this.yPos > height || this.yPos < 0)
			{
				this.ySpeed = -this.ySpeed;	
			}
	} 
}; // end of the object

var ball2 = { 
	rad: 30, 
	xPos: 100, 
	yPos: 100,
	xSpeed: 2,
	ySpeed: 3,
	
	drawBall: function(){
				fill(0,255,0);
				ellipse(this.xPos, this.yPos, this.rad, this.rad);	
		},
	
	moveBall: function(){
	
			this.xPos += this.xSpeed;
			this.yPos += this.ySpeed;

			if (this.xPos > width || this.xPos < 0)  
			{
				this.xSpeed = -this.xSpeed;
			}

			if (this.yPos > height || this.yPos < 0)
			{
				this.ySpeed = -this.ySpeed;	
			}
	} 
}; // end of the object


function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
	
	ball1.drawBall();
	ball1.moveBall();
	
		ball2.drawBall();
	ball2.moveBall();

	
	
}
