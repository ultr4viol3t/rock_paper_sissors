// initate humanChoice variable
let humanChoice = "";
let computerChoice = "";

// add event listeners for the buttons
const choice = document.querySelector("#buttons");
choice.addEventListener("click", (event) => {
    let target = event.target;
    switch(target.id) {
        case "rock" :
            humanChoice = "ROCK";
            break;
        case "paper" :
            humanChoice = "PAPER";
            break;
        case "scissors" :
            humanChoice = "SCISSORS"
            break;
    }
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    outputScore(humanScore, computerScore);
    console.log(gamesPlayed);
    if (gamesPlayed === 5) {
        alert("Gameover!");
    }
});
const choiceRock = document.querySelector("#rock");
const choicePaper = document.querySelector("#paper");
const choiceScissors = document.querySelector("#scissors");

// Write query selector for log and scores
const log = document.querySelector("#log");
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");

// Write logic to get computer choice
// randomly choose between, paper, scissors and rock
// Write function getComputerChoice

function getComputerChoice() {
    // Generates a random number between 0, 1 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // Create a Switch Statement to determine if it is rock, paper or scissors
    switch(randomNumber) {
        case 0:
            return "ROCK";
            break;
        case 1:
            return "PAPER";
            break;
        case 2:
            return "SCISSORS";
            break;
    }

}

// Write logic to getHumanChoice

/* function getHumanChoice() {
    let humanChoice = prompt("Choose between Rock, Paper and Scissors");
    return humanChoice.toUpperCase();
} */

// Write function for when player wins
function outputWin(humanChoice, computerChoice) {
    console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
    log.textContent = ("You win! " + humanChoice + " beats " + computerChoice + "!");
    humanScore = humanScore + 1;
}

// Write function for when player looses
function outputLoss(humanChoice, computerChoice) {
    console.log("You loose! " + computerChoice + " beats " + humanChoice + "!");
    log.textContent = ("You loose! " + computerChoice + " beats " + humanChoice + "!");
    computerScore = computerScore + 1;
}

// Write function for draw
function outputDraw(humanChoice, computerChoice) {
    console.log("It is a draw. You both choose " + computerChoice + "!");
    log.textContent = ("It is a draw. You both choose " + computerChoice + "!");
}

/* // Write function for unexpected output
function outputError(humanChoice) {
    console.log(humanChoice + " is not a valid opiton! Please try again.");
} */

// Write a function to display Scores
function outputScore(humanScore, computerScore) {
   displayComputerScore.textContent = computerScore;
   displayPlayerScore.textContent = humanScore;
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
}

// Declare scores humanScore and computerScore

let humanScore = 0;
let computerScore = 0;

// Create a function playRound with the parameters humanChoice and computerChoice


function playRound(humanChoice , computerChoice) {
    // Sequence to find out who wins:
    // Check if equal -> Draw and No points for anyone
    if (humanChoice == computerChoice) {
        outputDraw(humanChoice, computerChoice);
    }

    // Check if Computer chose Rock
    else if (computerChoice == "ROCK") {
        // Check if player chose Paper -> player wins
        if (humanChoice == "PAPER") {
            outputWin(humanChoice, computerChoice);
            gamesPlayed++;
        }
        // Check if player chose Scissors -> computer wins
        else if (humanChoice == "SCISSORS") {
            outputLoss(humanChoice, computerChoice);
            gamesPlayed++;
        }
        else {
            outputError();
        }
    }
    // Check if Computer chose Paper
    else if (computerChoice == "PAPER") {
        // Check if player choose Rock -> computer wins
        if (humanChoice == "ROCK") {
            outputLoss(humanChoice, computerChoice);
            gamesPlayed++;
        }
        // Check if player chose Scissors -> player wins
        else if (humanChoice == "SCISSORS") {
            outputWin(humanChoice, computerChoice);
            gamesPlayed++;
        }
        else {
            outputError();
        }

    }
    // Check if Computer chose Scissors
    else if (computerChoice == "SCISSORS") {
        if (humanChoice == "ROCK") {
            outputWin(humanChoice, computerChoice);
            gamesPlayed++;
        }
         // Check if player choose Rock -> player wins
        else if (humanChoice == "PAPER") {
            outputLoss(humanChoice, computerChoice);
            gamesPlayed++;
        }
        // Check if player choose Paper -> Computer wins
        else {
            outputError();
        }
    }
    



}


let gamesPlayed = 0;
let keepPlaying = true;



/* while(keepPlaying) {     
    if (gamesPlayed > 4) {
        alert("Game is over!");
        keepPlaying = false;
    }
    else {
        
        console.log("continue");
        keepPlaying = true;
       
    }
} */


