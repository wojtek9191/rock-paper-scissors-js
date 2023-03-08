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

// a function that plays a single round and returns who won the round


function playRound(playerSelection, computerSelection) {
if ((playerSelection == computerSelection)) {
    return "tie"
} else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")) {
    return "you won"
} else {
    return "you lost"
}
}

// a function that asks the player to make their choice
// input must be case insensitive and lower case for comparison


function getPlayerChoice() {
    let answer = prompt("Select rock, paper or scissors")
    return answer.toLowerCase();
}


//console.log(computerSelection);

//console.log(playRound(playerSelection, computerSelection));

// a function that plays a round of 5 games using a loop
    

function game (){
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
    console.log(playerScore, computerScore);
}

game();

// function should keep score and report winner at the end

//



