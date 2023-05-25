const btns = document.querySelectorAll('button');
const plyrScore = document.querySelector('#playerScore');
const cmptrScore = document.querySelector('#computerScore');
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
            updateScore("computer");
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Scissors") {
            updateScore("player");
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }
    if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            updateScore("computer");
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Rock") {
            updateScore("player");
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }
    if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            updateScore("computer");
            return playerSelection + " vs " + computerSelection + "...you lose!";
        }
        if (computerSelection === "Paper") {
            updateScore("player");
            return playerSelection + " vs " + computerSelection + "...you win!";
        }
    }

}


btns.forEach((button) => {
    button.addEventListener('click', function(e){
        playRound(e.target.id,getComputerChoice());
    })
});


function updateScore(winner) {
    if (winner === "player") {
        playerScore = playerScore + 1;
        plyrScore.textContent = playerScore;

    }
    if (winner == "computer") {
        computerScore = computerScore +1;
        cmptrScore.textContent = computerScore;
    }

}
//playGame();