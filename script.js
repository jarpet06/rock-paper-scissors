const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)]
};

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection.startsWith('r')) {
        playerSelection = 'rock';
    } else if (playerSelection.startsWith('p')) {
        playerSelection = 'paper';
    } else if (playerSelection.startsWith('s')) {
        playerSelection = 'scissors';
    }

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else {
        const loseMsg = "You Lose! " + playerSelection + " loses to " + computerSelection;
        const winMsg = "You Win! " + playerSelection + " beats " + computerSelection;

        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') return { winMsg };
            return { loseMsg };
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') return { winMsg };
            return { loseMsg };
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') return { winMsg };
            return { loseMsg };
        }
    }
}

const game = () => {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const userSelection = prompt('Rock paper scissors. 5 round match');

        const round = playRound(userSelection, getComputerChoice());

        if (round.winMsg) {
            alert(round.winMsg);
            userScore++;
        } else if (round.loseMsg) {
            alert(round.loseMsg);
            computerScore++;
        } else {
            alert(round);
        }
    }

    alert(`Your score: ${userScore}\nComputer score: ${computerScore}`)
}

game()