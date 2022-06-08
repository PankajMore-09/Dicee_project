var randomNumber1  =Math.floor (Math.random() * 6) +1 ;

var randomDiceImages = "dice" + randomNumber1 + ".png" //dice1.png to dice6.png

var randomImageSource = "Images/" + randomDiceImages;//images/dice1.png - images/dice6.png

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImageSource); 

var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1 > randomNumber2 )
{
  document.querySelector("h1").innerHTML = "🚩Play 1 Wins!"
}
else if(randomNumber2 > randomNumber1)
{
  document.querySelector("h1").innerHTML = "🚩Play 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Match Draw 😍"
}