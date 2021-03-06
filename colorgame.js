var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i =0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
	modeButtons[0].classList.remove("selected")
	modeButtons[1].classList.remove("selected")
	this.classList.add("selected"); //what was clicked on thsi refers to
	this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
	//if(this.textContent ==="Easy"){
		//numSquares = 3;
	//} else {
		//numSquares = 6;
	//}
	reset();
	//figure out how many squares to show
	//pick new colors
	//pick new pickedColor
	//update page to reflect changes
	});
}

function reset(){
colors = generateRandomColors(numSquares);
//pick new random color from array
pickedColor = pickColor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
//change colorsof the squares on the page
for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
	squares[i].style.display = "block";
	squares[i].style.background = colors[i];	
} else {
	squares[i].style.display = "none";
}
	
}
h1.style.background = "steelblue";

}
//
//easyBtn.addEventListener("click", function(){
	//hardBtn.classList.remove("selected");
	//easyBtn.classList.add("selected");
	//numSquares = 3;
	//colors = generateRandomColors(numSquares);
	//pickedColor = pickColor();
	//colorDisplay.textContent = pickedColor;
	//for(var i = 0; i < squares.length; i++){
	//	if(colors[i]){
	//		squares[i].style.background = colors[i];
	//	} else {
	//		squares[i].style.display = "none";
	//	}
	//}
//});

//hardBtn.addEventListener("click", function(){
//easyBtn.classList.remove("selected");
//hardBtn.classList.add("selected");
//numSquares = 6;
//colors = generateRandomColors(numSquares);
//pickedColor = pickColor();
//colorDisplay.textContent = pickedColor;
//for(var i = 0; i < squares.length; i++){
//		squares[i].style.background = colors[i];
//		squares[i].style.display = "block";
//}
//});



resetButton.addEventListener("click", function(){
//generate all new colors 
colors = generateRandomColors(numSquares);
//pick new random color from array
pickedColor = pickColor();
//change color display to match picked color
colorDisplay.textContent = pickedColor;
this.textContent = "New Colors"
messageDisplay.textContent = "";
//change colorsof the squares on the page
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
}
h1.style.background = "steelblue";
})


colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){

	//adding initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function (){
		//grab color of clicked square 
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct";
		resetButton.textContent = "Play Again";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
		} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
		}
	});

}

function changeColors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.background = color;

	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make array
	var arr = [];
	
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
		// get random color, push into array
	}
	//retunr array at the end
	return arr;

}

function randomColor() {
	//pick a red 0 -255
	var r = Math.floor(Math.random() * 256);
	//pick a green 0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a blue 0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
