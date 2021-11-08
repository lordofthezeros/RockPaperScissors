function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "draw";
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'lose';
    } else {
        return 'win';
    }

}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i < 6;) {
        let computerChoice = computerPlay().toLowerCase();
        let playerChoice = prompt("Make your choice! Type Rock, Paper, or Scissors to choose").toLowerCase();
        let roundResult = playRound(playerChoice, computerChoice);

        if (roundResult === 'draw') {
            console.log("The round was drawn, play again")
        } else if (roundResult === 'lose') {
            computerScore++;
            i++;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        } else {
            playerScore++;
            i++;
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        }

        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)

    }
    console.log("Game Over")
    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
}

let choices = ["rock", "paper", "scissors"];

game()