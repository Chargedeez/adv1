var bird;
var pipes = [];
var Score = 0;
var sunx = 300;
var sunset = 400;
var sunsetx = 600;
var bird1 = 800;
var moon = 1000;
var moonx = 1200;
var bird2 = 1800;
var sunrise = 1600;
var sunrisex = 1900;
var bird3 = 2800;
var bird4 = 3800;
var bird5 = 3850;



function setup() {
	createCanvas(400, 600);
	bird = new Bird();
	pipes.push(new Pipe());

	new Audio('https://instrumentalfx.co/wp-content/upload/11/Super-Mario-Bros.mp3').play()
	
	if ('Score = 530'){
			new Audio('https://instrumentalfx.co/wp-content/upload/11/Super-Mario-Bros.mp3').play()
	}
}

function draw() {
	background(255);
	//draws all my obstacles(pipes)

	//daytime
	//sky
stroke(0)
	strokeWeight(0);
	fill(10, 210, 300);
	rect(0, 0, 400, 400);
	fill(10, 212, 240);
	rect(0, 270, 400, 40);
	fill(10, 230, 240);
	rect(0, 310, 400, 40);
	fill(10, 240, 240);
	rect(0, 350, 400, 40);

	//ocean

	strokeWeight(0);

	fill(255);
	rect(0, 385, 400, 5);
	fill(10, 100, 300);
	rect(0, 390, 400, 50);

	strokeWeight(1);
	fill(1, 250, 240);
	

	//grass
	strokeWeight(0);
	fill(0, 180, 0);
	rect(0, 450, 400, 200);

	fill(0, 220, 0);
	rect(0, 440, 400, 20);

	fill(0);
	strokeWeight(1);
	line(0, 440, 400, 440);


	strokeWeight(0);
	fill(255);
	ellipse(sunx, 50, 50, 50);
	sunx = sunx - '.3';


	//evening time



	fill(250, 151, 0);
	rect(sunset, 0, 600, 390);

	fill(250, 191, 0);
	rect(sunset, 310, 600, 40);

	fill(250, 211, 0);
	rect(sunset, 350, 600, 40);

	fill(153, 51, 0);
	rect(sunset, 390, 600, 50);
	fill(255);
	rect(0, 385, 600, 5);

	//cloud 1
	fill(250, 241, 0);
	ellipse(sunsetx, 60, 30, 30);
	ellipse(sunsetx - 10, 62, 30, 30);
	ellipse(sunsetx + 10, 63, 30, 30);
	ellipse(sunsetx + 20, 65, 40, 30);
	ellipse(sunsetx - 20, 65, 30, 30);
	ellipse(sunsetx, 70, 30, 30);

	//cloud 2
	ellipse(sunsetx + 200, 90, 30, 30);
	ellipse(sunsetx + 190, 92, 30, 30);
	ellipse(sunsetx + 210, 93, 30, 30);
	ellipse(sunsetx + 220, 95, 40, 30);
	ellipse(sunsetx + 180, 95, 30, 30);
	ellipse(sunsetx + 200, 100, 30, 30);
	
	//background bird
	strokeWeight(1)
	line(bird1, 200, bird1 + 5, 200)
	if (mouseIsPressed) {
		line(bird1 + 2, 200, bird1 + 8, 210)
	} else {
		line(bird1 + 2, 200, bird1 + 8, 190)

	}

	strokeWeight(0)

	bird1 = bird1 - '.5';
	sunset = sunset - '.3';
	sunsetx = sunsetx - '.3';
	//night time

	fill(10, 30, 30);
	rect(moon, 0, 600, 390);

	fill(20, 80, 80);
	rect(moon, 390, 600, 50);
	fill(255);
	rect(0, 385, 600, 5);

	ellipse(moonx, 50, 50, 50);
	fill(10, 30, 30);
	ellipse(moonx - 20, 50, 50, 50);
	
		//background birds group of 3
	strokeWeight(1)
stroke(255)
	line(bird2, 200, bird2 + 5, 200)
	line(bird2 + 10, 180, bird2 + 15, 180)
	line(bird2 + 10, 220, bird2 + 15, 220)
	if (mouseIsPressed) {
		line(bird2 + 2, 200, bird2+ 8, 210)
		line(bird2 + 12, 180, bird2 + 18, 190)
		line(bird2 + 12, 220, bird2 + 18, 230)
	} else {
		line(bird2 + 2, 200, bird2+ 8, 190)
		line(bird2 + 12, 180, bird2 + 18, 170)
		line(bird2 + 12, 220, bird2 + 18, 210)
	}

	strokeWeight(0)
	bird2 = bird2 - '.5';
	moonx = moonx - '.3';

	moon = moon - '.3';

	//morning time



	fill(255, 142, 204);
	rect(sunrise, 0, 600, 390);

	fill(255, 182, 204);
	rect(sunrise, 310, 600, 40);

	fill(255, 202, 204);
	rect(sunrise, 350, 600, 40);

	//sun
	fill(255);
	ellipse(sunrisex, 340, 200, 200);
	fill(10, 100, 300);
	rect(sunrise, 390, 600, 50);
	fill(255);
	rect(0, 385, 600, 5);
	
	//background birds group of 5
	strokeWeight(1)
stroke(235, 160, 0)
	line(bird3, 200, bird3 + 5, 200)
	line(bird3 + 10, 180, bird3 + 15, 180)
	line(bird3 + 10, 220, bird3 + 15, 220)	
	line(bird3 + 20, 160, bird3 + 25, 160)
	line(bird3 + 20, 240, bird3 + 25, 240)
	if (mouseIsPressed) {
		line(bird3 + 2, 200, bird3 + 8, 210)
		line(bird3 + 12, 180, bird3 + 18, 190)
		line(bird3 + 12, 220, bird3 + 18, 230)		
		line(bird3 + 22, 160, bird3 + 28, 170)
		line(bird3 + 22, 240, bird3 + 28, 250)
	} else {
		line(bird3 + 2, 200, bird3 + 8, 190)
		line(bird3 + 12, 180, bird3 + 18, 170)
		line(bird3 + 12, 220, bird3 + 18, 210)		
		line(bird3 + 22, 160, bird3 + 28, 150)
		line(bird3 + 22, 240, bird3 + 28, 230)
	}
stroke(255)
	strokeWeight(0)
	
	bird3 = bird3 - '.5';



	sunrise = sunrise - '.3';
	sunrisex = sunrisex - '.3';
	
	//bacground birds, 2 groups of 5
	strokeWeight(1)
stroke(0)
	line(bird4, 200, bird4 + 5, 200)
	line(bird4 + 10, 180, bird4 + 15, 180)
	line(bird4 + 10, 220, bird4 + 15, 220)	
	line(bird4 + 20, 160, bird4 + 25, 160)
	line(bird4 + 20, 240, bird4 + 25, 240)
	if (mouseIsPressed) {
		line(bird4 + 2, 200, bird4 + 8, 210)
		line(bird4 + 12, 180, bird4 + 18, 190)
		line(bird4 + 12, 220, bird4 + 18, 230)		
		line(bird4 + 22, 160, bird4 + 28, 170)
		line(bird4 + 22, 240, bird4 + 28, 250)
	} else {
		line(bird4 + 2, 200, bird4 + 8, 190)
		line(bird4 + 12, 180, bird4 + 18, 170)
		line(bird4 + 12, 220, bird4 + 18, 210)		
		line(bird4 + 22, 160, bird4 + 28, 150)
		line(bird4 + 22, 240, bird4 + 28, 230)
	}
	
	bird4 = bird4 - '.5';
	strokeWeight(1)
stroke(0)
	line(bird5, 200, bird5 + 5, 200)
	line(bird5 + 10, 180, bird5 + 15, 180)
	line(bird5 + 10, 220, bird5 + 15, 220)	
	line(bird5 + 20, 160, bird5 + 25, 160)
	line(bird5 + 20, 240, bird5 + 25, 240)
	if (mouseIsPressed) {
		line(bird5 + 2, 200, bird5 + 8, 210)
		line(bird5 + 12, 180, bird5 + 18, 190)
		line(bird5 + 12, 220, bird5 + 18, 230)		
		line(bird5 + 22, 160, bird5 + 28, 170)
		line(bird5 + 22, 240, bird5 + 28, 250)
	} else {
		line(bird5 + 2, 200, bird5+ 8, 190)
		line(bird5 + 12, 180, bird5 + 18, 170)
		line(bird5 + 12, 220, bird5 + 18, 210)		
		line(bird5 + 22, 160, bird5 + 28, 150)
		line(bird5 + 22, 240, bird5 + 28, 230)
	}
stroke(255)
	strokeWeight(0)
	
	bird5 = bird5 - '.5';
	
	
	
	
	//score(when tap mouse, get a point)
	fill(255);
	text(Score, 200, 150);
	textSize(50)

	function sun() {



	}

	for (var i = pipes.length - 1; i >= 0; i--) {
		pipes[i].show();
		pipes[i].update();

		if (pipes[i].hits(bird)) {
			console.log("HIT");
		}


		if (pipes[i].offscreen()) {
			pipes.splice(i, 1);
		}
	}
	//shows my bird
	bird.update();
	bird.show();
	if (frameCount % 100 == 0) {
		pipes.push(new Pipe());
	}

}
//controls my bird, if spacebar is pressed, bird goes up. Changed it to left click on mouse


function mousePressed() {



		Score = Score + 1;
		bird.up();
		
		//console.log("SPACE");
	
}

function Bird() {
	this.y = height / 2;
	this.x = 64;

	this.gravity = 0.6;
	this.lift = -25;
	this.velocity = 0;


	this.show = function() {
		strokeWeight(1);
			fill(255)
		triangle(this.x + 15, this.y + 9, this.x + 15, this.y - 9, this.x + 23, this.y);
		fill(200, 10, 1);
		ellipse(this.x, this.y, 32, 32);
		fill(255)
		ellipse(this.x + 8, this.y - 9, 7, 7);
		fill(0)
		ellipse(this.x + 9, this.y - 9, 3, 3);
	
		
stroke(0)
		line(this.x + 15, this.y, this.x + 22, this.y);
stroke(255)

		//function mouseClicked(){
		if (mouseIsPressed) {
			fill(200, 40, 20);
			triangle(this.x - 10, this.y, this.x + 10, this.y, this.x, this.y - 20);

			return true
		} else {


			fill(200, 40, 20);
			triangle(this.x - 10, this.y, this.x + 10, this.y, this.x, this.y + 20);

			//console.log("LEFT");

		}

		// }

	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {
		this.velocity += this.gravity;
		this.velocity *= 0.9;
		this.y += this.velocity;

		if (this.y > height) {
			this.y = height;
			this.velocity = 0;
		}

		if (this.y < 0) {
			this.y = 0;
			this.velocity = 0;
		}
	}
}

function Pipe() {
	var siz;
	siz = 30
	this.top = random(height / 2);
	this.bottom = random(height / 2);
	this.x = width;
	this.w = 40;
	this.speed = 2;

	this.highlight = false;

	this.hits = function(bird) {
		if (bird.y < this.top || bird.y > height - this.bottom) {
			if (bird.x > this.x && bird.x < this.x + this.w) {
				this.highlight = true;
				return true;
			}
		}
		this.highlight = false;
		return false;
	}

	this.show = function() {
		strokeWeight(1);
		fill(0, 250, 0);
		if (this.highlight) {
			background(0, 0, 200)
			fill(255, 190, 0);
			textSize(40)
			text('GAME OVER!', 90, 170)
			text('TRY AGAIN', 110, 200)
			textSize(32)
			this.speed = 0;
			strokeWeight(0);

			bird.lift = 0;
			fill(0, 0, 200);


		}
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offscreen = function() {
		if (this.x < -this.w) {
			return true;
		} else {
			return false;
		}
	}


}
