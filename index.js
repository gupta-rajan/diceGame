var num1 = Math.floor(Math.random()*6)+1;

var num2 = Math.floor(Math.random()*6)+1;

document.querySelector("div .img1").setAttribute("src","/images/dice"+num1+".png");
document.querySelector("div .img2").setAttribute("src","/images/dice"+num2+".png");

if (num1 > num2){
    document.querySelector("div h1").innerHTML = "Player1 Wins!";
}
else if (num1 < num2){
    document.querySelector("div h1").innerHTML = "Player2 Wins!";
}
else {
    document.querySelector("div h1").innerHTML = "Draw";
}