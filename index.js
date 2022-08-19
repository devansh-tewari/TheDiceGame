function refresh(){
var a = Math.random();
var b = Math.random();
a = Math.floor(a*6)+1;
b = Math.floor(b*6)+1;
document.querySelector(".btn").textContent="Roll Again";
if(a===1){
  document.querySelector(".fst img").setAttribute("src", "images/dice1.png");
}
else if(a===2){
  document.querySelector(".fst img").setAttribute("src", "images/dice2.png");
}
else if(a===3){
  document.querySelector(".fst img").setAttribute("src", "images/dice3.png");
}
else if(a===4){
  document.querySelector(".fst img").setAttribute("src", "images/dice4.png");
}
else if(a===5){
  document.querySelector(".fst img").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".fst img").setAttribute("src", "images/dice6.png");
}
if(b===1){
  document.querySelector(".scnd img").setAttribute("src", "images/dice1.png");
}
else if(b===2){
  document.querySelector(".scnd img").setAttribute("src", "images/dice2.png");
}
else if(b===3){
  document.querySelector(".scnd img").setAttribute("src", "images/dice3.png");
}
else if(b===4){
  document.querySelector(".scnd img").setAttribute("src", "images/dice4.png");
}
else if(b===5){
  document.querySelector(".scnd img").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".scnd img").setAttribute("src", "images/dice6.png");
}
if(a>b){
    document.querySelector("h1").textContent="PLAYER 1 WON";
}
else if(a===b){
    document.querySelector("h1").textContent="OOPS! WE NEED A TIE-BREAKER";
}
else{
    document.querySelector("h1").textContent="PLAYER 2 WON";
}
}
