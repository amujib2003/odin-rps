/*
Create function getComputerChoice
Return rock, paper, or scissors randomly
Use Math.random to generate a number from 0-1
Make rock = anything less than or equal to 1/3 repeating
Make paper = anything greater than 1/3 repeating or less than or equal to 2/3 repeating
Make scissors = anything greater than 2/3 repeating
*/


function getComputerChoice() {
    let random = Math.random();

    if (random <= (1/3)) {
        console.log("rock")
    } else if (random > (1/3) & random <= (2/3)) {
        console.log("paper")
    } else if (random > (2/3)) {
        console.log("scissors")
    }
}

function getHumanChoice() {
    let option = prompt("rock, paper, or scissors?");

    if (option.toLowerCase() === "rock") {
        console.log("rock")
    } else if (option.toLowerCase() === "paper") {
        console.log("paper")
    } else if (option.toLowerCase() === "scissors") {
        console.log("scissors")
    } else {
        console.log("invalid option")
    }
}


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

}

/*
You win! Rock beats Scissors.
You win! Paper beats Rock.
You win! Scissors beats Paper.

Tie.
Tie.
Tie.

You Lose! Rock beats Scissors.
You Lose! Paper beats Rock.
You Lose! Scissors beats Paper.

Invalid option.
*/

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
