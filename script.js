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


// a function that plays a single round and returns who won the round

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        document.getElementById("results").innerText += "tie ";
} else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
        document.getElementById("results").innerText += `you won, you picked ${playerSelection} and computer picked ${computerSelection}`;
} else {
        document.getElementById("results").innerText +=`you lost, you picked ${playerSelection} and computer picked ${computerSelection}`;
    
}};


// a function that asks the player to make their choice
// input must be case insensitive and lower case for comparison

/* function getPlayerChoice() {
    let answer = prompt("Select rock, paper or scissors")
    return answer.toLowerCase();
} */


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







// a function that plays a round of 5 games using a loop
// function should keep score and report winner at the end
    

/* function game (){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection) == "you won") {
            playerScore ++;
        } else if (playRound(playerSelection, computerSelection) == "you lost") { 
            computerScore ++;
        } else {
            playerScore ++;
            computerScore ++;
        }
    }
    if (playerScore > computerScore) {
        console.log(`You won the game ${playerScore} to ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`You lost the game ${computerScore} to ${playerScore}`)
    } else {
        "It's a draw"
    }
}

game(); */



