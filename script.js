console.log("Hello World");

// computer makes a random choice
// users makes a choice
// message shows if user won


function getComputerChoice() {
    let randomNumber = Math.random() * 3;
    console.log(randomNumber);
    if (randomNumber <= 1) {
        return "Rock"
    } else if (randomNumber > 1 && randomNumber <= 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

