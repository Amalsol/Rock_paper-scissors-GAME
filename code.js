let playerScore = 0;
let computerScore = 0;

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Scissors" && computer === "Paper") ||
    (player === "Paper" && computer === "Rock")
  );
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore += 1;
    return `Player wins! ${userOption} beats ${computerResult}`;
  }

  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  }

  computerScore += 1;
  return `Computer wins! ${computerResult} beats ${userOption}`;
}

function showResults(userOption) {

  const resultMessage = getRoundResults(userOption);

 
  roundResultsMsg.innerText = resultMessage;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3) {
    winnerMsgElement.innerText = "Player has won the game!";
    showGameEnd();
  } else if (computerScore === 3) {
    winnerMsgElement.innerText = "Computer has won the game!";
    showGameEnd();
  }
}

function showGameEnd() {
  
  resetGameBtn.style.display = "block";
  optionsContainer.style.display = "none";
}

function resetGame() {
 
  playerScore = 0;
  computerScore = 0;

 
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;


  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";

 
  resetGameBtn.style.display = "none";

  optionsContainer.style.display = "block";
}

resetGameBtn.addEventListener("click", resetGame);

document.getElementById("rock-btn").addEventListener("click", function() {
  showResults("Rock");
});

document.getElementById("paper-btn").addEventListener("click", function() {
  showResults("Paper");
});

document.getElementById("scissors-btn").addEventListener("click", function() {
  showResults("Scissors");
});
