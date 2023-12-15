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
    console.log("You Lose! Paper beats Rock");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You Lose! Scissors beats Paper");
    return "computer";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You Lose! Rock beats Scissors");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You Win! Paper beats Rock");
    return "player";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You Win! Scissors beats Paper");
    return "player";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You Win! Rock beats Scissors");
    return "player";
  } else {
    console.log("It's a tie.");
    return "tie";
  }
}

function game() {
  let playerWins = 0;
  let computerWins = 0;
  let ties = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();

    let roundResult = playRound(computerSelection, playerSelection);

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
  }
  gameOver(playerWins, computerWins, ties);
}

function gameOver(playerWins, computerWins, ties) {
  if (playerWins > computerWins) {
    console.log("Player Won!");
  } else if (playerWins < computerWins) {
    console.log("Computer Won!");
  } else {
    console.log("It's a tie!");
  }
}

function getPlayerChoice() {
  let playerSelection;
  while (true) {
    playerSelection = prompt("Enter your move. Rock/Paper/Scissors", "");
    if (
      playerSelection.toLowerCase() === "rock" ||
      playerSelection.toLowerCase() === "paper" ||
      playerSelection.toLowerCase() === "scissors"
    )
      break;
    else console.log("Invalid input!!");
  }
  return playerSelection;
}

function printIntermediateResults(playerWins, computerWins, ties) {
  console.log("Player Score: " + playerWins);
  console.log("Computer Score: " + computerWins);
  console.log("Ties: " + ties);
}

game();
