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
const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));