const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 6);

    if (random <= 2) {
        return 'rock';
    } else if (random <= 4) {
        return 'paper';
    } else if (random <= 6) {
        return 'scissors';
    }
};

console.log(getComputerChoice());