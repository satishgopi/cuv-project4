// const rulesBtn = document.querySelector(".rules-btn");
const gameRulesBox = document.querySelector(".game-rules-box");
const closeBtn = document.querySelector(".close-btn");

const playboardBox = document.querySelector("#playboardBox");
const finalResultBox = document.querySelector("#finalResultBox");

const pcScore = document.getElementById("-pcScore");
const urScore = document.getElementById("-urScore");

const userIcon = document.getElementById("imgIcon");
const pcIcon = document.getElementById("pcImgIcon");

const userIconBorder = document.getElementById("-userIcon");
const pcIconBorder = document.getElementById("-pcIcon");

const Blue = "#0074B6";
const Yellow = "#FFA943";
const Purple = "#BD00FF";

function rulestab() {
  gameRulesBox.classList.add("block");
  if ((gameRulesBox.classList = "block")) {
    gameRulesBox.classList.add("game-rules-box");
  }
}

function resetScore() {
  localStorage.removeItem("data");
  localStorage.removeItem("userData");

  // Update the displayed scores to 0
  userScore = 0;
  computerScore = 0;
  pcScore.innerHTML = computerScore;
  urScore.innerHTML = userScore;
}

closeBtn.addEventListener("click", function () {
  gameRulesBox.classList.add("hide");
});

function playAgain() {
  playboardBox.classList.remove("hide");
  finalResultBox.classList.add("hide");
}

let userScore = parseInt(localStorage.getItem("userData")) || 0;
urScore.innerHTML = userScore;

let computerScore = parseInt(localStorage.getItem("data")) || 0;
pcScore.innerHTML = computerScore;

function userPlay(userChoice) {
  let randomName = ["rock", "paper", "scissor"];
  let randomNumber = randomName[Math.floor(Math.random() * 3)];

  finalResultBox.classList.remove("hide");
  playboardBox.classList.add("hide");

  userIcon.src = `./assets/ic-${userChoice}.png`;
  pcIcon.src = `./assets/ic-${randomNumber}.png`;

  // userIconBorderColorChange
  if (userChoice === "rock") {
    userIconBorder.style.borderColor = Blue;
  } else if (userChoice === "paper") {
    userIconBorder.style.borderColor = Yellow;
  } else {
    userIconBorder.style.borderColor = Purple;
  }

  // PcIconBorderColorChange
  if (randomNumber === "rock") {
    pcIconBorder.style.borderColor = Blue;
  } else if (randomNumber === "paper") {
    pcIconBorder.style.borderColor = Yellow;
  } else {
    pcIconBorder.style.borderColor = Purple;
  }

  if (userChoice === randomNumber) {
    // TIE
    pcIconBorder.style.setProperty("--displayPc", "none");
    userIconBorder.style.setProperty("--displayUser", "none");
    document.getElementById("-winnerTitle").innerHTML = "TIE";
    document.getElementById("-againstPC").classList.add("hide");

    // You Win
  } else if (
    (userChoice === "rock" && randomNumber === "scissor") ||
    (userChoice === "paper" && randomNumber === "rock") ||
    (userChoice === "scissor" && randomNumber === "paper")
  ) {
    pcIconBorder.style.setProperty("--displayPc", "none");
    userIconBorder.style.setProperty("--displayUser", "block");

    userScore++;
    document.getElementById("-winnerTitle").innerHTML = "YOU WIN";
    document.getElementById("-againstPC").classList.remove("hide");

    // PC-Win
  } else {
    pcIconBorder.style.setProperty("--displayPc", "block");
    userIconBorder.style.setProperty("--displayUser", "none");

    computerScore++;
    document.getElementById("-winnerTitle").innerHTML = "YOU LOST";
    document.getElementById("-againstPC").classList.remove("hide");
  }
  // Score Update
  pcScore.innerHTML = computerScore;
  urScore.innerHTML = userScore;

  localStorage.setItem("data", computerScore);
  localStorage.setItem("userData", userScore);
}
