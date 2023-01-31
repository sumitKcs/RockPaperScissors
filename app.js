const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scicssors = document.getElementById("scissors-button");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");
let userChoice;
let computerChoice;
let result;
// window.onload = function () {
//   document.getElementById("theme").play();
// };
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener(
    "click",
    (e) => {
      userChoice = e.target.id;
      // userChoiceDisplay.innerText = userChoice;
      if (userChoice === "rock") {
        // userChoiceDisplay.innerHTML =
        //   "<img class='choice' src='assets/rock.jpg' alt='rock'>";
        generateComputerChoice();
        getResult();
        rock.classList.add("animate-up");
        paper.classList.remove("animate-up");
        scicssors.classList.remove("animate-up");
      }
      if (userChoice === "paper") {
        // userChoiceDisplay.innerHTML =
        //   "<img class='choice' src='assets/paper.jpg' alt='rock'>";
        generateComputerChoice();
        getResult();
        paper.classList.add("animate-up");
        rock.classList.remove("animate-up");
        scicssors.classList.remove("animate-up");
      }
      if (userChoice === "scissors") {
        // userChoiceDisplay.innerHTML =
        //   "<img class='choice' src='assets/scissors.jpg' alt='rock'>";
        generateComputerChoice();
        getResult();
        scicssors.classList.add("animate-up");
        rock.classList.remove("animate-up");
        paper.classList.remove("animate-up");
      }
    },
    true
  )
);

function generateComputerChoice() {
  const randomNumber = Math.ceil(Math.random() * 3); // or we can write 3 directly
  const options = ["rock", "paper", "scissors"];

  computerChoice = options[randomNumber - 1];
  if (computerChoice === "rock") {
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/rock.jpg' alt='rock'>";
  }
  if (computerChoice === "paper") {
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/paper.jpg' alt='rock'>";
  }
  if (computerChoice === "scissors") {
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/scissors.jpg' alt='rock'>";
  }
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost!";
  }

  if (result === "draw!") {
    draw.play();
    result = `<span style="color: yellow; font-size:2rem;">draw!</span>`;
  }
  if (result === "you win!") {
    win.play();
    result = `<span style="color: green; font-size:2rem;">you win!</span>`;
  }
  if (result === "you lost!") {
    lose.play();
    result = `<span style="color: red; font-size:2rem;">you lost!</span>`;
  }

  resultDisplay.innerHTML = result;
}

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
