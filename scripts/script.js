const options = ["rock", "paper", "scissors"];

function getHumanChoice() {
  let humanChoice = "";

  do {
    humanChoice = prompt(
      "Your choice: (rock, paper or scissors)"
    ).toLowerCase();
  } while (!options.includes(humanChoice));

  return humanChoice;
}

function getComputerChoice() {
  const getRandomNum = () => Math.floor(Math.random() * 3);

  const randomNum = getRandomNum();
  const computerChoice = options[randomNum];

  return computerChoice;
}

function playGame() {
  const totalRounds = 5;
  let computerScore = 0;
  let humanScore = 0;

  function playRound(humanChoice, computerChoice) {
    const paperBeatsRock = humanChoice === "paper" && computerChoice === "rock";
    const scissorsBeatsPaper =
      humanChoice === "scissors" && computerChoice === "paper";
    const rockBeatsScissors =
      humanChoice === "rock" && computerChoice === "scissors";

    let result = "";
    let message = "";
    if (humanChoice === computerChoice) {
      message = "It's a tie!";
      console.log(message);
      return;
    } else {
      if (paperBeatsRock || scissorsBeatsPaper || rockBeatsScissors) {
        result = "won";
        humanScore++;
      } else {
        result = "lost";
        computerScore++;
      }
    }

    const firstElement = result === "won" ? humanChoice : computerChoice;
    const secondElement = result === "won" ? computerChoice : humanChoice;

    message = `You ${result}! ${firstElement} beats ${secondElement}`;
    console.log(message);
    return;
  }

  for (let i = 1; i <= totalRounds; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`\n--- Round ${i} ---`);
    console.log(`You chose: ${humanChoice}\nComputer chose: ${computerChoice}`);
    playRound(humanChoice, computerChoice);
  }
  console.log(
    `\n--- Scoreboard ---\nYou: ${humanScore}\nComputer: ${computerScore}`
  );
}
playGame();
