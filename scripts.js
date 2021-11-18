const images = document.querySelectorAll('.card-image');
const message = document.querySelector('.message');
const pScore = document.querySelector('.player-score');
const cScore = document.querySelector('.computer-score');


// Set initial player and computer scores

let playerScore = 0;
let computerScore = 0;

images.forEach((image) =>
    image.addEventListener('click', function (e) {
        let choice = e.target.alt;
        console.log(choice); // remove this once it's working
        if (playerScore >= 5 || computerScore >=5) {
            return;
        }
        game(choice);

    }));


// create a function that chooses either rock paper or scissors randomly
function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())];

}
// create a function to play one round of rock paper scissors
function playRound(pSelection, cSelection) {
    // check if the player choice and computer choice are identical
    if (pSelection === cSelection) {
        return "draw";
        // check if the computer choice beats the player choice
    } else if ((pSelection === 'Rock' && cSelection === 'Paper') ||
        (pSelection === 'Paper' && cSelection === 'Scissors') ||
        (pSelection === 'Scissors' && cSelection === 'Rock')) {
        return 'lose';
        // if computer doesn't beat the player and it's not a draw then the player wins
    } else {
        return 'win';
    }

}
// create a function to play 5 rounds of games
function game(pChoice) {
    // initialise the player and computer scores
    // make a random choice for the computer
    let computerChoice = computerPlay();
    // ask the user for an input
    let playerChoice = pChoice;
    // play a round
    let roundResult = playRound(playerChoice, computerChoice);
    // check if the round was won, lost or drawn. Only add to the round count if it wasn't drawn
    if (roundResult === 'draw') {
        // print the outcome of the round
        message.textContent = "The round was drawn, play again"
    } else if (roundResult === 'lose') {
        // add to the computer score
        computerScore++;
        cScore.textContent = computerScore;
        // print the outcome of the round
        message.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else {
        // add to the player score
        playerScore++;
        pScore.textContent = playerScore;
        // print the outcome of the round
        message.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    }
    if (computerScore >= 5) {
        message.textContent = "Too bad, You lose!";
    } else if (playerScore >= 5) {
        message.textContent = "Way to go, You won!";
    }

}

// set the choices for the computer to select from
let choices = ["Rock", "Paper", "Scissors"]