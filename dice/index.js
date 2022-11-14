document.querySelector(".start-button").addEventListener("click", onClick);

function onClick(){
    document.querySelector(".display").classList.add("disp-hide");

    setTimeout(chngeDisplay, 500);
    
}

function chngeDisplay(){
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];

    image1.setAttribute("src", "images/dice"+randomNumber1+".png");
    image2.setAttribute("src", "images/dice"+randomNumber2+".png");



    if(randomNumber1>randomNumber2){
        document.querySelector(".display").classList.remove("disp-hide");
        document.querySelector(".display").innerText = "Player 1 Wins";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector(".display").classList.remove("disp-hide");
        document.querySelector(".display").innerText = "Player 2 Wins";
    }
    else{
        document.querySelector(".display").classList.remove("disp-hide");
        document.querySelector(".display").innerText = "Draw!";
    }
}