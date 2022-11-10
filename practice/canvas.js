
let canvas = document.getElementById("canvas-1");
canvas.width = 100;
canvas.height = 100;
/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let squares = [];
let gridSize = 4;
let size = canvas.width / gridSize;
let colors = {"red", "orange", "yellow", "green", "blue", "indigo", "violet"}
for(let row = 1; row <= gridSize; row++ ) {
	for(let row = 1; row <= gridSize; col++ ) {
		let colorIndex = Math.floor( Math.random() * color.length;)
		let colors (colorIndex);
		drawSquare (col * size, row * size, "red", );
	}
}

// drawSquare(0, 0, "red");
// //context.fillStyle = "red";
// //context.fillRect(0, 0, 25, 25);

// drawSquare(25, 0, "blue");
// //context.fillStyle = "blue";
// //context.fillRect(25, 0, 25, 25);

// drawSquare(50, 0, "green");
// //context.fillStyle = "green";
// //context.fillRect(50, 0, 25, 25);

// drawSquare(75, 0, "purple");
// //context.fillStyle = "purple";
// //context.fillRect(75, 0, 25, 25);

function drawSquare(x, y, color, size = 25){
	let square = new Path2D()
	square.rectrect(x, y, size, size)
    
	squares.push(square)
	
	context.fillStyle = color;
	context.fillRect(x, y, size, size);
}

console.log(squares);