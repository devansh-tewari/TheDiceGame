function refresh(){
var a = Math.random();
var b = Math.random();
a = Math.floor(a*6)+1;
b = Math.floor(b*6)+1;
var c = "dice"+a+".png";
var d = "dice"+b+".png";
document.querySelector(".btn").textContent="Roll Again";
document.querySelector(".fst img").setAttribute("src", c);
document.querySelector(".scnd img").setAttribute("src", d);
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
