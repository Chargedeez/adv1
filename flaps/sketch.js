var bird;
var pipes = [];
var Score= 0;


function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());

		new Audio('https://instrumentalfx.co/wp-content/upload/11/Super-Mario-Bros.mp3').play()
}

function draw() {
  background(255);
//draws all my obstacles(pipes)
	fill(0);
	text(Score,200,150);
	textSize(50)
	
	
	
  for (var i = pipes.length-1; i >= 0; i--) {
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

	
function mouseClicked() {
  if (mouseButton == LEFT) {
	
		
	Score = Score + 1;
    bird.up();
		//triangle(bird.x-10, bird.y,bird.x+10, bird.y,bird.x, bird.y-20);  }else {
			
		//triangle(bird.x-10,bird.y,bird.x+10, bird.y,bird.x, bird.y+20)	;
    //console.log("SPACE");
		}
  }
	
function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -15;
  this.velocity = 0;

	
  this.show = function() {
    fill(10,200,200);
    ellipse(this.x, this.y, 32, 32);
		fill(255)
		 ellipse(this.x+8, this.y-9, 7, 7);
		fill(0)
		ellipse(this.x+9, this.y-9, 3, 3);
		fill(0,200,0)
		triangle(this.x+ 15,this.y+ 9,this.x + 15,this.y - 9, this.x +23, this.y );
		
		line(this.x+15,this.y,this.x+20,this.y);
		 
		
		//function mouseClicked(){
		if (mouseIsPressed) {  
			fill(0,200,0);
		triangle(this.x-10, this.y,this.x+10, this.y,this.x, this.y-20);
			
		return true } else {
			
			
			fill(0,200,0);
		triangle(this.x-10, this.y,this.x+10, this.y,this.x, this.y+20)	;
				
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
	siz=30
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = width;
  this.w = 20;
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
    fill(0,0,200);
    if (this.highlight) {
			background(0,0,200)
      fill(255,190,0);
			 textSize(40)
       text('GAME OVER!',90,170)
				text('TRY AGAIN',110,200)
        textSize(32)
			this.speed = 0;
			bird.lift=0;
			 fill(0,0,200);
			strokeWeight(0);
			

    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom);
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




