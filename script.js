const btns = document.querySelector(".btns");

let playerWins = 0;
let computerWins = 0;
let ties = 0;

btns.addEventListener("click", (event) => {
  const target = event.target;

  switch (target.id) {
    case "rock":
      game("rock");
      break;
    case "paper":
      game("paper");
      break;
    case "scissors":
      game("scissors");
      break;
  }
});

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);
  switch (randomNum) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

function playRound(computerSelection, playerSelection) {
  computerSelection = computerSelection.toLowerCase();
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === "rock" && computerSelection === "paper") {
    printRoundResult("You Lose! Paper beats Rock");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    printRoundResult("You Lose! Scissors beats Paper");
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    printRoundResult("You Lose! Rock beats Scissors");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    printRoundResult("You Win! Paper beats Rock");
    return "player";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    printRoundResult("You Win! Scissors beats Paper");
    return "player";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    printRoundResult("You Win! Rock beats Scissors");
    return "player";
  } else {
    printRoundResult("It's a tie.");
    return "tie";
  }
}

function game(playerSelection = "") {
  const computerSelection = getComputerChoice();
  const roundResult = playRound(computerSelection, playerSelection);

  switch (roundResult) {
    case "player":
      playerWins++;
      break;
    case "computer":
      computerWins++;
      break;
    case "tie":
      ties++;
      break;
  }
  printIntermediateResults(playerWins, computerWins, ties);
  if (playerWins === 5 || computerWins === 5) {
    gameOver();
  }
}

function gameOver() {
  if (playerWins > computerWins) {
    printRoundResult("Player Won! The final score was:");
  } else {
    printRoundResult("Computer Won! The final score was:");
  }
  playerWins = 0;
  computerWins = 0;
  ties = 0;
}

function printIntermediateResults(playerWins, computerWins, ties) {
  const divResults = document.querySelector("#score-result");
  divResults.textContent =
    "\nPlayer Wins: " +
    playerWins +
    "\nComputer Wins: " +
    computerWins +
    "\nTies: " +
    ties;
}

function printRoundResult(result) {
  const divResults = document.querySelector("#text-result");
  divResults.textContent = result;
}
