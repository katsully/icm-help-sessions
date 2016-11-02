// Inspired by an example from Allison Parish

var vid;
var blur = 1;
var slider;

function setup() {
	createCanvas(400, 400);
	vid = createVideo("rotating_stack.mp4");
	vid.loop();
	vid.hide();
	noStroke();
}

function draw() {
	background(0);
	// image(vid);
	vid.loadPixels();
	// noprotect
	for (var y = 0; y < height; y += 8) {
		for (var x = 0; x < width; x += 8) {
			var offset = ((y * width) + x) * 4;
			fill(vid.pixels[offset]*2,
				vid.pixels[offset + 1]*2,
				vid.pixels[offset + 2]*2, 127);
			rect(y, x, 8, 8);
			rect(height-y, x, 8, 8);
			rect(x,y,8,8);
			rect(width-x, y, 8, 8);			
		}
	}
}