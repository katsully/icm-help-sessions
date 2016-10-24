var deg = 90;

function setup() { 
  createCanvas(400, 400);
	
	// you can only use this variable in setup() 
	var onlyInSetup = 5;
} 

function draw() { 
  background(220);
	fill(255,0,0);
	
	push(); //remember
	translate(200,200);
	rotate(radians(deg));
	ellipse(0,0,50,50);
	line(-20, -20, 20, 20);
	pop(); //forget
	
	push();
	translate(300, 200);
	rectMode(CENTER);
	rotate(radians(deg));
	rect(0,0,50,50);
	pop();
	
	// deg++ SAME AS deg = deg + 1
	// deg+=2 SAME AS deg = deg + 2
	// deg-- SAME AS deg = deg - 1
	deg++;
}