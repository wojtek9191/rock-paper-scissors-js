// computer makes a random choice

function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    if (randomNumber <= 1) {
        return "ROCK"
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

// user is asked to make their choice

function getPlayerChoice() {
    let playerChoice = prompt("Make your choice").toUpperCase();
    return playerChoice;
}

// variables/parameters that will be used in playRound function

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

// function that takes computer and user inputs and shows who won

function playRound(computerSelection, playerSelection) {
    if (
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') ||
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER')
    ) {
        return `You lost. ${computerSelection} beats ${playerSelection}`;
    } else if (
        (playerSelection === 'PAPER' && computerSelection === 'ROCK') ||
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER')
    ) {
        return `You won. ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
        return `It's a draw`;
    }
}

console.log(playRound(computerSelection, playerSelection));

//////////////////////

let playerScore = 0;
let computerScore = 0;

function game() {
    playRound(computerSelection, playerSelection);
}

for (let i = 0; i < 5; i++) {
    game();

 }


