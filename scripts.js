function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a draw, play again!";
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||  
            (playerSelection === 'paper' && computerSelection === 'scissors') || 
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    else {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    }
    
}

let choices = ["rock", "paper", "scissors"]

let computerChoice = computerPlay().toLowerCase()

let playerChoice = prompt("Make your choice! Type Rock, Paper, or Scissors to choose").toLowerCase()

console.log(playRound(playerChoice, computerChoice))