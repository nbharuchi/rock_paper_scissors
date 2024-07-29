console.log("Hello World! Let's play rock paper and scissors");
let humanScore = 0;
let computerScore = 0;


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
/*function getHumanChoice() {
    /*let humanChoice = prompt("What's your choice?");
    if (humanChoice.toUpperCase() === "ROCK") {
        return humanChoice;
    } else if (humanChoice.toUpperCase() === "PAPER") {
        return humanChoice;
    } else if (humanChoice.toUpperCase() === "SCISSORS") {
        return humanChoice;
    } else {
        return "Invalid choice";
    }*/




let humanSelection;
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    humanSelection = "ROCK";
    playGame();
    //playRound(humanSelection);
});
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    humanSelection = "PAPER";
    playGame();
});
const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    humanSelection = "SCISSORS";
    playGame();
});





function playGame() {

    let compScore;
    let humScore;
    let score;
    let humanWon;
    let computerWon;
    let tie;
    //let number_of_rounds = prompt("enter the number of rounds you want to play to determine the winner:");
    //let number_of_rounds = 1;
    //for (i = 1; i <= number_of_rounds; i++) {
    let computerSelection = getComputerChoice(2);
    const compPara = document.querySelector('#computerChoose');
    compPara.textContent = `computer chooses : ${computerSelection}`;

    console.log("computer chooses :", computerSelection);

    const humanPara = document.querySelector('#humanChoose');
    humanPara.textContent = `human chooses : ${humanSelection}`;

    console.log("human chooses:", humanSelection);

    /* if (humanSelection === "Invalid choice") {
 
         console.log("Enter valid choice. try again");
         //playGame();
         break;
     }*/
    score = playRound(computerSelection, humanSelection);
    if (score === 1) {
        computerScore++;

        console.log("computer Score:", computerScore);

        compScore = document.querySelector('#computerScore');
        compScore.textContent = `computer score : ${computerScore}`;

        console.log("human score:", humanScore);

        humScore = document.querySelector('#humanScore');
        humScore.textContent = `human score : ${humanScore}`;

    } else if (score === -1) {
        humanScore++;
        console.log("human score:", humanScore);
        humScore = document.querySelector('#humanScore');
        humScore.textContent = `human score : ${humanScore}`;

        console.log("computer Score:", computerScore);
        compScore = document.querySelector('#computerScore');
        compScore.textContent = `computer score : ${computerScore}`;
    } else if (score === 0) {
        humScore = document.querySelector('#humanScore');
        humScore.textContent = `human score : 0`;

        compScore = document.querySelector('#computerScore');
        compScore.textContent = `computer score : 0`;
    }


    if (humanScore >= 5 || computerScore >= 5) {
        const winText = (humanScore > computerScore) ? 'Won by human' : 'Won by computer';
        humanScore = 0;
        computerScore = 0;
        // ties = 0;
        alert(winText);
    }
    /*if (humanScore > computerScore) {
        console.log("human wins with a score of :", humanScore);
        humanWon = document.querySelector('#humanScoreWon');
        humanWon.textContent = `human wins with a score of: ${humanScore} `;
    } else if (computerScore > humanScore) {
        console.log("computer wins with a score of :", computerScore);
        computerWon = document.querySelector('#computerScoreWon');
        computerWon.textContent = `computer wins with a score of: ${computerScore} `;
    } else {
        console.log("it's a tie!");
        humanWon.textContent = "";
        computerWon.textContent = "";
        //tie = document.querySelector('#tie');
        //tie.textContent = `it's a tie`;
    }*/
    //}

    function playRound(computerChoice, humanChoice) {
        humanChoice = humanChoice.toUpperCase();
        if (computerChoice === humanChoice) {
            console.log("it's a tie")
            tie = document.querySelector('#tie');
            tie.textContent = `it's a tie`;

            computerWon = document.querySelector('#computerWon');
            computerWon.textContent = "";

            humanWon = document.querySelector('#humanWon');
            humanWon.textContent = "";
            return 0;
        } else if ((computerChoice === "ROCK" && humanChoice === "SCISSORS")
            || (computerChoice === "PAPER" && humanChoice === "ROCK")
            || (computerChoice === "SCISSORS" && humanChoice === "PAPER")) {
            console.log("Computer Won")

            computerWon = document.querySelector('#computerWon');
            computerWon.textContent = `computer won`;

            tie = document.querySelector('#tie');
            tie.textContent = ``;

            humanWon = document.querySelector('#humanWon');
            humanWon.textContent = "";
            return 1;
        } else {
            console.log("Human Won")

            humanWon = document.querySelector('#humanWon');
            humanWon.textContent = `human won`;

            tie = document.querySelector('#tie');
            tie.textContent = ``;

            computerWon = document.querySelector('#computerWon');
            computerWon.textContent = "";

            return -1;
        }
    }
}
//playGame();
