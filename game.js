// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
var num1 = Math.round(Math.random() * 100);
const num1box = document.getElementById("number1");

var num2 = Math.round(Math.random() * 100);
const num2box = document.getElementById("number2");

// Iteration 3: Creating variables required to make the game functional
var operator;
var score = 0;
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const divide = document.getElementById("divide");
const mul = document.getElementById("mul");
const modulus = document.getElementById("modulus");

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
var num3box = document.getElementById("number3");
var num3;

// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num1 = Math.round(Math.random() * 100);  //3
    num2 = Math.round(Math.random() * 100);  //5

    if(num1 < num2) {
        var extra = num1;  //extra=3 //here we are swapping the two numbers if num1<num2
        num1 = num2;       //num1=5
        num2 = extra;      //num2=3
    }

    operator = Math.round(Math.random() * 5);  //0 to 5 //to generate numbers incl. 0 and 5 as  there are 5 operators
    switch (operator) {
        case 1: //generating random num 1
            num3 = num1 + num2;
            break;
        
        case 2: 
            num3 = num1 - num2;
            break;

        case 3: 
            num3 = num1 * num2;
            break;

        case 4: 
            num3 = Math.floor(num1 / num2);  //Math.floor(5.4) //5 
            break;

        case 5: 
            num3 = num1 % num2;
            break;

        case 0:
            randomise(); //recursion
    }
    num1box.innerHTML = num1;
    num2box.innerHTML = num2;
    num3box.innerHTML = num3;

    //console.log(num1 + " " + num2 + " " + num3 + " " + operator);
}
randomise();
// Iteration 6: Making the Operators (button) functional
plus.onclick = () => {
    if (num1 + num2 === num3){ // if answer is correct
        score++;
        randomise();
    } else { //answer is wrong
        location.href = "gameover.html?score=" + score;
    }
};
minus.onclick = () => {
    if (num1 - num2 === num3){ // if answer is correct
        score++;
        randomise();
        resetTime(timerId);
    } else { //answer is wrong
        location.href = "gameover.html?score=" + score;
    }
}
mul.onclick = () => {
    if (num1 * num2 === num3){ // if answer is correct
        score++;
        randomise();
        resetTime(timerId);
    } else { //answer is wrong
        location.href = "gameover.html?score=" + score;
    }
}
divide.onclick = () => {
    if (Math.floor(num1 / num2) === num3){ // if answer is correct
        score++;
        randomise();
        resetTime(timerId);
    } else { //answer is wrong
        location.href = "gameover.html?score=" + score;
    }
}
modulus.onclick = () => {
    if (num1 % num2 === num3){ // if answer is correct
        score++;
        randomise();
        resetTime(timerId);
    } else { //answer is wrong
        location.href = "gameover.html?score=" + score;
    }
}

// Iteration 7: Making Timer functional
var time = 20;
var timerId;
var timer = document.getElementById("timer");

function startTimer() {
    time = 20;
    timer.innerHTML = time;
    timerId = setInterval (() => {
        time--;
        if (time == 0) location.href = "gameover.html?score=" + score;
        timer.innerHTML = time;
    }, 1000);
}

function resetTime(intervalId){
    clearInterval(intervalId);
    startTimer();
}

startTimer();