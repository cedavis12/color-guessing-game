
var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1Background = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.getElementsByClassName("mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpModeButtons() {
    for (i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {

            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");

            if(this.textContent === "Easy"){
                numSquares = 3;
            }
            else if(this.textContent === "Medium"){
                numSquares = 6;
            }
            else 
            {
                numSquares = 9;
            }

            reset();

        });
    }
}

function setUpSquares() {
    for (i = 0; i < squares.length; i++) {
        //add event listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;
            //compare color to pickedColor
            console.log(pickedColor, clickedColor);
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1Background.style.backgroundColor = clickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of squares
    for (i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
    //reset page content
    h1Background.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}

resetButton.addEventListener("click", function () {
    reset();
});


function changeColors(color) {
    //loop through all squares
    for (i = 0; i < colors.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    //pick random number
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (i = 0; i < num; i++) {
        //get a random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
}

function randomColor() {
    //pick a "red" from 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 255
    var b = Math.floor(Math.random() * 256);

    return ("rgb(" + r + ", " + g + ", " + b + ")")
}
