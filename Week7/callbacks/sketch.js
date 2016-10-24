var counter = 0;
var paragraph;
var paragraphs = [];

function setup() { 
  createCanvas(400, 400);
	background(0,0,255);
	
	createP("How many red circles? ");
	var inp = createInput('');
	inp.input(drawRedCircles);
	
	// # = id
	paragraph = select('#callback');
	paragraph.mouseOver(strikethrough);
	
	// select everything with class = "name"
	// . = name
	paragraphs = selectAll('.name');
	
	//DONT DO THIS
	// paragraphs.mouseOver(underline);
	
	for(var i=0; i < paragraphs.length; i++){
		paragraphs[i].mouseOver(underline);
	}
} 

function draw() {
	background(0,0,255);
	
	fill(255,0,0);
	for(var i=0; i < counter; i++) { 
		ellipse(i*10, i*10, 25, 25);
	}
}

function drawRedCircles(){
	counter = this.value();
}

function strikethrough(){
	// this.style('text-decoration', 'line-through');	
	this.style('color', 'violet');
}

function underline(){
	this.style('text-decoration', 'underline');
}
