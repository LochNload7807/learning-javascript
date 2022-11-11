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

		if(this.lastRefresh >= this.refreshRate){
			this.setColor
		}
	}

	draw() {}
}

let squares = [];

let gridSize = 4;

let size = canvas.width / gridSize;

let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// for(let row = 1; row <= gridSize; row++ ) {
// 	for(let col = 1; col <= gridSize; col++ ) {
// 		let colorIndex = Math.floor( Math.random() * colors.length);
// 		let color = colors[colorIndex];
// 		drawSquare (col * size, row * size, color);
// 	}
// }

function drawSquare(x, y, color, size = 25) {
	// let square = new Path2D();
	// square.rect(x, y, size, size);

	// squares.push(square);
	// console.log(x, y, color, size);
	context.fillStyle = color;
	context.fillRect(x, y, size, size);
}

console.log(squares);

let currentTime = 0;
const refreshRate = 500;
let lastRefresh = 0;

function drawLoop(timestamp) {
	let elaspedTime = timestamp - currentTime;
	currentTime = timestamp;

	lastRefresh = lastRefresh + elaspedTime;

	// console.log(lastRefresh, timestamp, elaspedTime);

	if (lastRefresh >= refreshRate) {

		
		lastRefresh = 0;
		for (let row = 0; row < gridSize; row++) {
			for (let col = 0; col < gridSize; col++) {

				let colorIndex = Math.floor(Math.random() * colors.length);
				let color = colors[colorIndex];

				drawSquare(col * size, row * size, color, size);
			}
		}
		
	}
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
