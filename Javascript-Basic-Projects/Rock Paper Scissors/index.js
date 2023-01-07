let myChoice = document.getElementById("yourChoice");
let myCompChoice = document.getElementById("compChoice");
let displayResult = document.getElementById("result");
let userChoice;
let compChoice;
let result;

const myFunction = (event) => {
    randomNum();
    userChoice = event.target.id;
    myChoice.innerHTML = userChoice;
    checkResult();
};

const randomNum = () => {
    let num = Math.floor(Math.random()*3 + 1);
    if(num ==1){
      compChoice = "rock";
    }else if(num == 2){
        compChoice = "scissors";
    }else{
        compChoice = "paper";
    }

    myCompChoice.innerHTML = compChoice;
};

const checkResult = () => {
    if(compChoice === userChoice){
        result = "it's draw";
    }else if(compChoice === "paper" && userChoice === "rock") {
        result = "You lose!"
    }else if(compChoice === "paper" && userChoice === "scissors"){
        result = "You win!"
    }else if(compChoice === "rock" && userChoice === "paper"){
        result = "You win!"
    }else if(compChoice === "rock" && userChoice === "scissors"){
        result = "You lose!"
    }else if(compChoice === "scissors" && userChoice === "paper"){
        result = "You lose!"
    }else{
        result = "You win!"
    }
    displayResult.innerHTML = result;
};