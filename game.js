// Target the Canvas
const canvas = document.getElementById('myCanvas');
// Creating & Declaring the width/height of Canvas in Px
canvas.width = 500;
canvas.height = 500;
const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let characterSpeed = 5;
// CHANGE WIDTH & HEIGHT OF BAR
let characterW = 0;
const CHARACTER_H = 50;

// USED TO ADJUST LOCATION OF THE BAR
// (500 / 5) - (0 / 2)  --- if we delete '- characterW / 2' it still works
let characterX = CANVAS_WIDTH / 5 - characterW / 2;
// (500 / 2) - (100 / 4) = 225
let characterY = CANVAS_HEIGHT / 2 - CHARACTER_H / 4;

const ctx = canvas.getContext('2d');

ctx.fillStyle = 'grey'; // selecting paint color
ctx.fillRect(characterX, characterY, 200, CHARACTER_H);
let progress = 0;

let isGameOver = false;

function update() {
	if (characterW >= 300) {
		isGameOver = true;
	}
	console.log(characterX);
	characterW += 1; //update charx
	console.log('update x ', characterX);
	console.log('update y ', characterY);
	progress += 1;
}

function draw() {
	ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	ctx.fillStyle = 'grey'; // selecting paint color
	// CHANGE WIDTH OF BAR
	ctx.fillRect(characterX, characterY, 300, CHARACTER_H);
	ctx.fillStyle = 'cadetblue'; // selecting paint color
	ctx.fillRect(characterX, characterY, characterW, CHARACTER_H);
	ctx.font = '50px serif';
	// DISPLAY EXACT PERCENTAGE OF PROGRESS
	ctx.fillText(`Progress: ${Math.floor(progress / 3)}%`, 100, 100);
}

let keys = {};
function keyboardListeners() {
	function myTest(x) {
		if (x.key === 'ArrowRight') {
			characterX += 5;
		}
		if (x.key === 'ArrowLeft') {
			characterX += 5;
		}
		if (x.key === 'ArrowUp') {
			characterX += 5;
		}
		if (x.key === 'ArrowDown') {
			characterX += 5;
		}
	}
	document.addEventListener(`keydown`, myTest);
}
keyboardListeners();
function main() {
	if (!isGameOver) {
		update();
		draw();
	}
}
// main();
setInterval(main, 50);
