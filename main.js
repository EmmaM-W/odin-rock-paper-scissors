const btns = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection) {
        return playerSelection + " vs " + computerSelection + "...draw!";
    }

    if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            computerScore = computerScore+ 1;
            console.log(computerScore);
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Scissors") {
            playerScore = playerScore+ 1;
            console.log(playerScore);
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {

            computerScore = computerScore+ 1;
            console.log(computerScore);
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Rock") {
            playerScore = playerScore+ 1;
            console.log(playerScore);
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


btns.forEach((button) => {
    button.addEventListener('click', function(e){
        playRound(e.target.id,getComputerChoice());
    })
});

//playGame();