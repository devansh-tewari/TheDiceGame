var sum1=0,sum2=0;
function check(){
    if(sum1>=20){
      document.querySelector("h1").textContent="Player 1 Won";
      document.querySelector(".btn1").textContent="Game Over";
      document.querySelector(".btn2").textContent="Game Over";
      document.querySelector(".btn1").disabled="true";
      document.querySelector(".btn2").disabled="true";
      document.querySelector(".spn1").textContent="Game Over, Reload to Play Again";
    }
    if(sum2>=20){
      document.querySelector("h1").textContent="Player 2 Won";
      document.querySelector(".btn1").textContent="Game Over";
      document.querySelector(".btn2").textContent="Game Over";
      document.querySelector(".btn1").disabled="true";
      document.querySelector(".btn2").disabled="true";
      document.querySelector(".spn1").textContent="Game Over, Reload to Play Again";
    }
}

function refresh(){
var a = Math.random();
a = Math.floor(a*6)+1;
sum1=sum1+a;
document.querySelector(".btn1").textContent="Roll Again";
document.querySelector(".fst img").setAttribute("src", "images/dice"+a+".png");
document.querySelector(".sp1").textContent=sum1;
document.querySelector(".spn1").textContent="~ Turn of Player 2 ~";
document.querySelector(".hey").classList
document.querySelector(".hey").classList.toggle("dis");
document.querySelector(".hey2").classList.toggle("dis");
check();
}
function refresh2(){
var b = Math.random();
b = Math.floor(b*6)+1;
sum2=sum2+b;
document.querySelector(".btn2").textContent="Roll Again";
document.querySelector(".scnd img").setAttribute("src", "images/dice"+b+".png");
document.querySelector(".sp2").textContent=sum2;
document.querySelector(".spn1").textContent="~ Turn of Player 1 ~";
document.querySelector(".hey").classList.toggle("dis");
document.querySelector(".hey2").classList.toggle("dis");
check();
}
