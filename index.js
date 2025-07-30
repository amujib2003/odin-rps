function getComputerChoice() {
    let random = Math.random();

    if (random <= (1/3)) {
        return ("rock")
    } else if (random > (1/3) & random <= (2/3)) {
        return ("paper")
    } else if (random > (2/3)) {
        return ("scissors")
    }
}

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")


let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        return ('Tie.')
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore;
        return ('You win! Rock beats Scissors.');
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore;
        return ('You win! Paper beats Rock.')
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        return('You win! Scissors beats Paper.')
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore;
        return ('You Lose! Paper beats Rock.')
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore;
        return ('You Lose! Scissors beats Paper.')
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        return ('You Lose! Rock beats Scissors.')
    } else if (humanChoice === "invalid option") {
        return ('Invalid choice. Try again.')
    }

}

const result = document.querySelector("#results")

rock.addEventListener("click", () => {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);
    });
    
paper.addEventListener("click", () => {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);
    });

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);
    });


/*
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i + 1}`);
        console.log(`Player Choice: ${humanSelection}`);
        console.log(`Computer Choice: ${computerSelection}`);
        console.log(playRound(humanSelection, computerSelection));
    }

    console.log(`Final Scores - Human: ${humanScore} Computer: ${computerScore}`);
}

playGame();
*/