let choices = ["rock", "paper", "scissors"]

function computerPlay() {
    return choices[Math.floor(choices.length * Math.random())];

}

let computerChoice = computerPlay()

let playerChoice = prompt