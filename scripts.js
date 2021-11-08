// create a function that chooses either rock paper or scissors randomly
function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())];

}
// create a function to play one round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // check if the player choice and computer choice are identical
    if (playerSelection === computerSelection) {
        return "draw";
        // check if the computer choice beats the player choice
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        return 'lose';
        // if computer doesn't beat the player and it's not a draw then the player wins
    } else {
        return 'win';
    }

}
// create a function to play 5 rounds of games
function game() {
    // initialise the player and computer scores
    let playerScore = 0;
    let computerScore = 0;
// loop through 5 rounds
    for (let i = 1; i < 6;) {
        // make a random choice for the computer
        let computerChoice = computerPlay().toLowerCase();
        // ask the user for an input
        let playerChoice = prompt("Make your choice! Type Rock, Paper, or Scissors to choose").toLowerCase();
        // play a round
        let roundResult = playRound(playerChoice, computerChoice);
        // check if the round was won, lost or drawn. Only add to the round count if it wasn't drawn
        if (roundResult === 'draw') {
            // print the outcome of the round
            console.log("The round was drawn, play again")
        } else if (roundResult === 'lose') {
            // add to the computer score
            computerScore++;
            // add to the round count
            i++;
            // print the outcome of the round
            console.log(`You lose! ${computerChoice} beats ${playerChoice}`)
        } else {
            // add to the player score
            playerScore++;
            // add to the round count
            i++;
            // print the outcome of the round
            console.log(`You win! ${playerChoice} beats ${computerChoice}`)
        }
// print the current score
        console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)

    }
    // once 5 complete rounds have been played print game over
    console.log("Game Over")

    // if the player has scored more than the computer print "You win" if not print "You lose"
    if (playerScore > computerScore) {
        console.log("You win!")
    } else {
        console.log("You lose!")
    }
    // print the final score
    console.log(`Player Score: ${playerScore} Computer Score: ${computerScore}`)
}

// set the choices for the computer to select from
let choices = ["rock", "paper", "scissors"];

// allow the page to run the game
game()