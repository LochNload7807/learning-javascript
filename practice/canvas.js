//@ts-check
/** @type {HTMLCanvasElement} */ //@ts-ignore
let canvas = document.getElementById("canvas-1");
canvas.width = 100;
canvas.height = 100;
/** @type {CanvasRenderingContext2D} */ //@ts-ignore
let context = canvas.getContext("2d");

//let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

class Clickbox {
	constructor(x, y, size, colors){
		this.x = x;
		this.y = y;
		this.size = size;

		this.isClicked = false;
		this.refreshRate = 500;
		this.lastRefresh = 0;
		this.colors = colors;
		this.color = "red";

		this.setColor();
	}

	setColor() {
		let colorIndex = Math.floor(Math.random() * this.colors.length);
		this.color = this.colors[colorIndex];
	}

	update(timeElapsed) {
		this.lastRefresh += timeElapsed;

        if(this.lastRefresh < this.refreshRate) return;



		this.lastRefresh = 0;

		this.setColor();
		
	}

	draw() {
		context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.size, this.size);
	}
}

let squares = [];

let gridSize = 4;
let size = canvas.width / gridSize;
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

for(let row = 1; row <= gridSize; row++ ) {
	for(let col = 1; col <= gridSize; col++ ) {
		//let colorIndex = Math.floor( Math.random() * colors.length);
		//let color = colors[colorIndex];
		//drawSquare (col * size, row * size, color, size);
 
		let x = col * size;
		let y = row * size
		let box = new Clickbox(x, y, size, colors);
		squares.push(box);
	}
}



let currentTime = 0;


function drawLoop(timestamp) {
	let elaspedTime = timestamp - currentTime;
	currentTime = timestamp;
	
    squares.forEach((b) => {
        b.update(elaspedTime);
		b.draw();
	}); 
	
			
	
	
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
