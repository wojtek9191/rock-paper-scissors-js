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
}

//console.log(getComputerChoice());

// a function that plays a single round and returns who won the round

function playRound(playerSelection, computerSelection) {
if ((playerSelection == computerSelection)) {
    console.log("tie");
} else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    console.log("you won")
} else {
    console.log("you lost")
}
}

const playerSelection = "rock"
const computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);