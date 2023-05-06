
// 1. Create a random number between 1 and 6
// 2. Create a random dice image
function random() {
  var num = Math.floor(Math.random() * 6) + 1;
  return num;
}
function getImageName(num){
    return "images/dice" + num + ".png";
}


function changeImage() {
    var randomNum1stDice = random();
    var randomNum2ndDice = random(); 
    document.querySelector("img.img1").setAttribute("src", getImageName(randomNum1stDice));
    document.querySelector("img.img2").setAttribute("src", getImageName(randomNum2ndDice));
    if(randomNum1stDice > randomNum2ndDice){
        document.querySelector("#result-panel").innerHTML = "🚩1st Player Wins!";
    }
    else if(randomNum1stDice === randomNum2ndDice){
        document.querySelector("#result-panel").innerHTML = "Draw";
    }
    else{
        document.querySelector("#result-panel").innerHTML = "2nd Player Wins! 🚩";
    }  
}

changeImage();




