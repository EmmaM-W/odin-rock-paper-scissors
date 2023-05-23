function getComputerChoice(){
    x = Math.floor(Math.random()*3);
    if (x === 0) {
        return "Rock";
    }
    if (x === 1) {
        return "Paper";
    }
    if (x === 2) {
        return "Scissors";
    }
}
function getPlayerChoice(){
    do {
        playerInput = prompt("please enter Rock, Paper or Scissors!");
        playerInput = playerInput.toLowerCase();
    } while (playerInput != "rock" && playerInput != "paper" && playerInput != "scissors");
        
    return capitaliseFirstLetter(playerInput);

}
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        return playerSelection + " vs " + computerSelection + "...draw!";
    }
    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Scissors") {
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Rock") {
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Paper") {
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }

}
function playGame(){
    playerScore = 0;
    computerScore = 0;
    for (let index = 0; index < 5; index++) {
        roundResult = playRound(playerSelection,computerSelection);
        console.log(roundResult);
        if (roundResult.includes("win")) {
            playerScore = playerScore + 1;
        }
        if (roundResult.includes("lose")) {
            computerScore = computerScore +1;
        }
        console.log("the score is now  " + playerScore + ":" + computerScore);
    }
}


function capitaliseFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

playerSelection = getPlayerChoice()
computerSelection = getComputerChoice();
playGame();