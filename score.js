// Iteration 8: Making scoreboard functional
var urlParams = new URLSearchParams(window.location.search); //"?score=5
console.log(urlParams);
var score = urlParams.get("score"); //new URLSearchParams(window.location.search).get("score") //5

var scoreBoard = document.getElementById("score-board");

var playAgainButton = document.getElementById("play-again-button");

scoreBoard.innerHTML = score;
playAgainButton.onclick = (evt) => {
    location.href = "./game.html";
};
