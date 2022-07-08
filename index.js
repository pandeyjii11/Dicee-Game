var randomNumber1 = Math.ceil(Math.random()*6);
if(randomNumber1==1)
    document.querySelector(".firstImg img").setAttribute("src", "images/dice1.png");
else if(randomNumber1==2)
    document.querySelector(".firstImg img").setAttribute("src", "images/dice2.png");
else if(randomNumber1==3)
    document.querySelector(".firstImg img").setAttribute("src", "images/dice3.png");
else if(randomNumber1==4)
    document.querySelector(".firstImg img").setAttribute("src", "images/dice4.png");
else if(randomNumber1==5)
    document.querySelector(".firstImg img").setAttribute("src", "images/dice5.png");
else
    document.querySelector(".firstImg img").setAttribute("src", "images/dice6.png");

var randomNumber2 = Math.ceil(Math.random()*6);
if(randomNumber2==1)
    document.querySelector(".secondImg img").setAttribute("src", "images/dice1.png");
else if(randomNumber2==2)
    document.querySelector(".secondImg img").setAttribute("src", "images/dice2.png");
else if(randomNumber2==3)
    document.querySelector(".secondImg img").setAttribute("src", "images/dice3.png");
else if(randomNumber2==4)
    document.querySelector(".secondImg img").setAttribute("src", "images/dice4.png");
else if(randomNumber2==5)
    document.querySelector(".secondImg img").setAttribute("src", "images/dice5.png");
else
    document.querySelector(".secondImg img").setAttribute("src", "images/dice6.png");

if(randomNumber1>randomNumber2)
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
else if(randomNumber1<randomNumber2)
    document.querySelector("h1").textContent = "Player 2 wins!🚩";
else
    document.querySelector("h1").textContent = "Draw!";

