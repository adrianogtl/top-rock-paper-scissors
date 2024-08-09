const roundCounter = document.querySelector("#round-counter");
const playerScoreEl = document.querySelector("#player-score");
const computerScoreEl = document.querySelector("#computer-score");
const buttons = Array.from(document.querySelectorAll("button"));
const resultEl = document.querySelector("#result");
const OPTIONS = ["rock", "paper", "scissors"];
const TOTAL_ROUNDS = 5;
let round = 1;
let computerScore = 0;
let playerScore = 0;
let playerChoice = "";

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (round <= 5) {
      playerChoice = OPTIONS[index];
      playRound(playerChoice, getComputerChoice());
      roundCounter.textContent = round;
      round++;
    }

    if (round === 6) {
      resetGame();
    }
  });
});

function getComputerChoice() {
  const getRandomNum = () => Math.floor(Math.random() * 3);

  const randomNum = getRandomNum();
  const computerChoice = OPTIONS[randomNum];

  return computerChoice;
}

function resetGame() {
  toggleButtons();
  setTimeout(() => {
    round = 1;
    computerScore = 0;
    playerScore = 0;
    playerChoice = "";
    roundCounter.textContent = round;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultEl.textContent = "";
    toggleButtons();
  }, 3000);
}

function toggleButtons() {
  buttons.forEach((button) => {
    button.toggleAttribute("disabled");
  });
}

function playRound(playerChoice, computerChoice) {
  const paperBeatsRock = playerChoice === "paper" && computerChoice === "rock";
  const scissorsBeatsPaper =
    playerChoice === "scissors" && computerChoice === "paper";
  const rockBeatsScissors =
    playerChoice === "rock" && computerChoice === "scissors";

  let result = "";

  if (playerChoice === computerChoice) {
    resultEl.textContent = `It's a tie! You both chose ${playerChoice}`;
    return;
  } else {
    if (paperBeatsRock || scissorsBeatsPaper || rockBeatsScissors) {
      result = "won";
      playerScore++;
      playerScoreEl.textContent = playerScore;
    } else {
      result = "lost";
      computerScore++;
      computerScoreEl.textContent = computerScore;
    }
  }

  const firstElement = result === "won" ? playerChoice : computerChoice;
  const secondElement = result === "won" ? computerChoice : playerChoice;

  resultEl.textContent = `You ${result}! ${firstElement} beats ${secondElement}`;
  return;
}
