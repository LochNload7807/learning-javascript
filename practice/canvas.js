
let canvas = document.getElementById("canvas-1");
/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let squares = [];

drawSquare(0, 0, "red");
//context.fillStyle = "red";
//context.fillRect(0, 0, 25, 25);

drawSquare(25, 0, "blue");
//context.fillStyle = "blue";
//context.fillRect(25, 0, 25, 25);

drawSquare(50, 0, "green");
//context.fillStyle = "green";
//context.fillRect(50, 0, 25, 25);

drawSquare(75, 0, "purple");
//context.fillStyle = "purple";
//context.fillRect(75, 0, 25, 25);

function drawSquare(x, y, color, size = 25){
	let square = new Path2D()
	square.rectrect(x, y, size, size)
    
	squares.push(square)
	
	context.fillStyle = color;
	context.fillRect(x, y, size, size);
}

console.log(squares);