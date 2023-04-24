const selectedRock = document.getElementById("rock");
const selectedPaper = document.getElementById("paper");
const selectedScissors = document.getElementById("scissors");

// get a random choice from the computer
// 0-rock, 1-paper, 2-scissors

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
    return "rock"
    } else if (choice == 1) {
    return "paper"
    } else {
    return "scissors"
    }
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {

if (playerSelection == computerSelection) {
        document.getElementById("results").innerText += "tie \n";
} else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        
        document.getElementById("results").innerText += `you won, you picked ${playerSelection} and computer picked ${computerSelection} \n`;
        playerScore++;
} else {
        document.getElementById("results").innerText +=`you lost, you picked ${playerSelection} and computer picked ${computerSelection} \n`;
        computerScore++;
}


const playerPoints = document.getElementById("playerPoints");
playerPoints.innerText = `Player score is ${playerScore}`;

const computerPoints = document.getElementById("computerPoints");
computerPoints.innerText = `Computer score is ${computerScore}`;

if (playerScore == 5) {
    const playerWon = document.createElement("h2");
    playerWon.innerText = `Congratualtions, you won ${playerScore} to ${computerScore}!`;
    document.body.appendChild(playerWon);
}

if (computerScore == 5) {
    const computerWon = document.createElement("h2");
    computerWon.innerText = `Maybe next time, computer won ${computerScore} to ${playerScore}!`;
    document.body.appendChild(computerWon);
}

};


selectedRock.addEventListener("click", () => {
    const playerSelection = selectedRock.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

selectedPaper.addEventListener("click", () => {
    const playerSelection = selectedPaper.id;
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
});

selectedScissors.addEventListener("click", () => {
    const playerSelection = selectedScissors.id;
    const computerSselection = getComputerChoice();
    playRound(playerSelection, computerSselection);
});
