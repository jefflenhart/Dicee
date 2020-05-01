var randomNumber1 = Math.floor(Math.random() * 6) +1; //number generator

var randomImageSource = "images/dice" + randomNumber1 + ".png"; // image path for dice1

var image1 = document.querySelector("img");  //selecting DOM element for image1

image1.setAttribute("src", randomImageSource); //change DOM to new dice for dice1

var randomNumber2 = Math.floor(Math.random() * 6) +1; //number generator

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //image path for dice2

var image2 = document.querySelectorAll("img")[1]; //selecting DOM element for image2

image2.setAttribute("src", randomImageSource2);  //change DOM to new image for dice2

/***
  Declaring the winner
***/
var winner = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = "Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  winner.innerHTML = "Player 2 Wins!";
}
else {
  winner.innerHTML = "Draw!"
}
