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

const score = document.querySelector("#score");

const points = document.createElement("p")

rock.addEventListener("click", () => {
    humanChoice = "rock";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);

    points.textContent = (`Player: ${humanScore} CPU: ${computerScore}`);
    score.appendChild(points);

    if (humanScore == 5 && computerScore < 5) {
        const win = document.createElement("p")
        win.textContent = ("Player wins!")
        score.appendChild(win);
    } else if (computerScore == 5 && humanScore < 5) {
        const win = document.createElement("p")
        win.textContent = ("Computer wins!")
        score.appendChild(win);
    }
    });
    
paper.addEventListener("click", () => {
    humanChoice = "paper";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);

    points.textContent = (`Player: ${humanScore} CPU: ${computerScore}`);
    score.appendChild(points);

    if (humanScore == 5 && computerScore < 5) {
        const win = document.createElement("p")
        win.textContent = ("Player wins!")
        score.appendChild(win);
    } else if (computerScore == 5 && humanScore < 5) {
        const win = document.createElement("p")
        win.textContent = ("Computer wins!")
        score.appendChild(win);
    }
    });

scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    const computerChoice = getComputerChoice();

    const round = document.createElement("p");
    round.textContent = (playRound(humanChoice, computerChoice));
    result.appendChild(round);

    points.textContent = (`Player: ${humanScore} CPU: ${computerScore}`);
    score.appendChild(points);

        if (humanScore == 5 && computerScore < 5) {
            const win = document.createElement("p")
            win.textContent = ("Player wins!")
            score.appendChild(win);
        } else if (computerScore == 5 && humanScore < 5) {
            const win = document.createElement("p")
            win.textContent = ("Computer wins!")
            score.appendChild(win);
        }
    });