var n = Math.random();
var r1 = Math.floor(n*6) + 1;

var randomDiceImage = "dice" + r1 + ".png";
var randomImgSrc = "Images/" + randomDiceImage;

var imge1 = document.querySelectorAll("img")[0];
imge1.setAttribute("src", randomImgSrc);



var n = Math.random();
var r2 = Math.floor(n*6) + 1;

var randomDiceImage2 = "dice" + r2 + ".png";
var randomImgSrc2 = "Images/" + randomDiceImage2;

var imge2 = document.querySelectorAll("img")[1];
imge2.setAttribute("src", randomImgSrc2);



if(r1>r2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"
}

else if(r1==r2){
    document.querySelector("h1").innerHTML = "🏁 Tie!"
}

else{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩"
}