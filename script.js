const buttons = document.querySelectorAll('.userPlay');


let userScoreDisplayed = document.getElementById('userScore');
let compScoreDisplayed = document.getElementById('compScore');

let result = document.getElementById(`result`);
let resetBtn = document.getElementById(`reset`);

let compScoreTransitional = 0;
let userScoreTransitional = 0;

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
})

resetBtn.addEventListener(`click`, () => {
    compScoreTransitional = 0;
    userScoreTransitional = 0;
    updateScore();
    result.textContent = 'No result yet ';
})

function playRound() {
    userChoice = this.id.toUpperCase(); // this refers to the button
    compChoice = getCompSelection();

    if (result.textContent === `The user won the game` || result.textContent === `The computer won the game`) {
        return;
    }
    if (compChoice === `ROCK` && userChoice === `SCISSORS` || compChoice === `PAPER` && userChoice === `ROCK` || compChoice === `SCISSORS` && userChoice === `PAPER`) {
        compScoreTransitional++;
        result.textContent = `The computer won this round`;
    } else if (userChoice === `ROCK` && compChoice === `SCISSORS` || userChoice === `PAPER` && compChoice === `ROCK` || userChoice === `SCISSORS` && compChoice === `PAPER`) {
        userScoreTransitional++;
        result.textContent = `The user won this round`;
    } else {
        result.textContent = `It's a draw`;
    }

    updateScore();
    if (userScoreTransitional === 5) {
        return result.textContent = `The user won the game`;
    } else if (compScoreTransitional === 5) {
        return result.textContent = `The computer won the game`;
    }
}

function getCompSelection() {
    let compSelectionGenerator = Math.random()
    switch (true) {
        case (compSelectionGenerator < 0.33):
            return `ROCK`;
        case (compSelectionGenerator < 0.66):
            return `PAPER`;
        default:
            return `SCISSORS`;
    }
}

function updateScore() {
    userScoreDisplayed.textContent = userScoreTransitional;
    compScoreDisplayed.textContent = compScoreTransitional;
}