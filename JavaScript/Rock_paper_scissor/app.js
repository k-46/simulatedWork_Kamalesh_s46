// Computer randomly picks one
const choices = ["rock", "paper", "scissors"];
let computerChoice = choices[Math.floor(Math.random() * 3)];

// Deciding the winner
const decide = () => {
  const resultBlk = document.querySelector("#result");
  let res = "";
  if (playerChoice === computerChoice) {
    res = "It's a tie!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    res = "You win!";
  } else {
    res = "You lose!";
  }
  resultBlk.innerHTML = res;
  console.log(res);
};

// Your choice
let playerChoice = "";

const changeUser = (e) => {
  playerChoice = e.target.id;
  computerChoice = choices[Math.ceil(Math.random() * 2)];
  document.querySelector("#compschoice").textContent = computerChoice;
  document.querySelector("#userschoice").textContent = playerChoice;
  decide();
};
