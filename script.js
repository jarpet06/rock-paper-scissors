const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * 3)]
};

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const loseMsg = "You Lose! " + playerSelection + " beats" + computerSelection;
    const winMsg = "You Win! " + playerSelection + " beats " + computerSelection;

    if (playerSelection === computerSelection) {
        return "Tie!";
    } else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') return winMsg;
            return loseMsg;
        } else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') return winMsg;
            return loseMsg;
        } else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') return winMsg;
            return loseMsg;
        }
    }
}
