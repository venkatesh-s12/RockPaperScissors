let gameResult = document.querySelector('.game-result')
let gameMoves = document.querySelector('.game-moves')
let gameScore = document.querySelector('.game-score')


/*let score = {
     won : 0,
     loose : 0,
     tie : 0
};
*/
let score = JSON.parse(localStorage.getItem('score')) ||
{
    won: 0,
    loose: 0,
    tie: 0
}
displayScore();

/*if (score === null){
    score = {
     won : 0,
     loose : 0,
     tie : 0
    };
} */

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = ''
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie'
        }
        else if (computerMove === 'paper') {
            result = 'You lose'
        }
        else if (computerMove === 'scissors') {
            result = 'You won'
        }
    }

    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You won'
        }
        else if (computerMove === 'paper') {
            result = 'Tie'
        }
        else if (computerMove === 'scissors') {
            result = 'You lose'
        }
    }

    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose'
        }
        else if (computerMove === 'paper') {
            result = 'You won'
        }
        else if (computerMove === 'scissors') {
            result = 'Tie'
        }
    }

    if (result === 'You won') {
        score.won += 1;
    }
    else if (result === 'You lose') {
        score.loose += 1;
    }
    else if (result === 'Tie') {
        score.tie += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    displayScore();
    gameResult.textContent = `${result}.`
    gameMoves.innerHTML =`You <img src="images/${playerMove}-emoji.png" class="image"> <img src="images/${computerMove}-emoji.png" class="image"> Computer`;

    /*  alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result}
Won:${score.won},Loose:${score.loose},Tie:${score.tie}`); */
}


function pickComputerMove() {
    let computerMove = '';
    let randomNum = Math.random();

    if (randomNum >= 0 && randomNum < 1 / 3) {
        computerMove = 'rock'
    }
    else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
        computerMove = 'paper'
    }
    else if (randomNum >= 2 / 3 && randomNum < 1) {
        computerMove = 'scissors'
    }
    return computerMove;
}

function reset() {
    score = {
        won: 0,
        loose: 0,
        tie: 0
    };
    localStorage.removeItem('score');
    displayScore();
}

function displayScore() {

    gameScore.textContent = `Won: ${score.won}, Loose: ${score.loose}, Tie: ${score.tie}`;
}
