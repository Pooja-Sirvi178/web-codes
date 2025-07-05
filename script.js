let userScore = 0;
let compScore = 0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

//Show Winner
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor = "red";
    }
}

//Draw Match
const drawGame = () => {
    msg.innerText = "Game was draw! Play again.";
    msg.style.backgroundColor = "#051e41";
}

//Computer Choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3); //generate random number without decimal point
    return options[ranIdx];
}

//Play Game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        //Draw Match
        drawGame();
    } else { //Deside Winner
        let userWin = true;
        if(userChoice === "rock") {
            //scissor, paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            //rock, paper
            userWin = compChoice === "scissor" ? false : true;
        } else {
            //paper, scissor
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

//User Choice
let addEvent = (choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}

choices.forEach(addEvent);