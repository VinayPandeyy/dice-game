//image 1
var randomNumber = Math.floor(Math.random()*6)+1;

var randomDiceImage = "images/dice"+randomNumber+".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);

//image 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource2 ="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);
//who wins
if(randomNumber>randomNumber2){
  document.querySelector("h1").innerHTML= "🚩Player1 wins";
}
else if (randomNumber2>randomNumber) {
  document.querySelector("h1").innerHTML= "Player2 Wins🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
