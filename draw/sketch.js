



var ruby;
var emerald;
var  sapphire;


function setup() {
	createCanvas(800, 800);
		background(127);
	frameRate(120);
	
	ruby = random(255);
	emerald = random(255);
	sapphire = random (255);
}

function draw() {

	
	strokeWeight(20);
	stroke(ruby,emerald,sapphire);
	fill(ruby,emerald,sapphire,127);
	ellipse(360,700,260,200);
	
}

function mouseDragged() {
	noStroke();

	
	ellipse(mouseX, mouseY, 20, 20,100);
fill(0);

}

function mouseWheel() {
	background(127);

}

function mousePressed(){
	
	ruby = random(255);
	emerald = random(255);
	sapphire = random (255);
	
}




























