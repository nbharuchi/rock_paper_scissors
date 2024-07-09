console.log("Hello World! Let's play rock paper and scissors");

function getComputerChoice(max) {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * max);
    if (randomNumber == 0) {
        return computerChoice = "ROCK";
    } else if (randomNumber == 1) {
        return computerChoice = "PAPER";
    } else {
        return computerChoice = "SCISSORS";
    }

}
function getHumanChoice() {
    let humanChoice = prompt("What's your choice?");
    if (humanChoice.toUpperCase() === "ROCK") {
        return humanChoice;
    } else if (humanChoice.toUpperCase() === "PAPER") {
        return humanChoice;
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        return humanChoice;
    } else {
        return "Invalid choice";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let score;
    let number_of_rounds = prompt("enter the number of rounds you want to play to determine the winner:");
    for (i = 1; i <= number_of_rounds; i++) {
        let computerSelection = getComputerChoice(2);
        let humanSelection = getHumanChoice();
        console.log(computerSelection);
        console.log(humanSelection);
        score = playRound(computerSelection, humanSelection);
        if (score === 1) {
            computerScore++;
            console.log("computer Score:", computerScore);
        } else if (score === -1) {
            humanScore++;
            console.log("human score:", humanScore);
        }
    }
    if (humanScore > computerScore) {
        console.log("human wins with a score of :", humanScore);
    } else if (computerScore > humanScore) {
        console.log("computer wins with a score of :", computerScore);
    } else {
        console.log("it's a tie!");
    }

    function playRound(computerChoice, humanChoice) {
        humanChoice = humanChoice.toUpperCase();
        if (computerChoice === humanChoice) {
            console.log("it's a tie")
            return 0;
        } else if ((computerChoice === "ROCK" && humanChoice === "SCISSORS")
            || (computerChoice === "PAPER" && humanChoice === "ROCK")
            || (computerChoice === "SCISSORS" && humanChoice === "PAPER")) {
            console.log("Computer Won")
            return 1;
        } else {
            console.log("Human Won")
            return -1;
        }
    }

}
playGame();
