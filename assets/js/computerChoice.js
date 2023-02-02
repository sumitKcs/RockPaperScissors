const computerChoiceDisplay = document.getElementById("computer-choice");

//variable declarations
let computerChoice;

function generateComputerChoice() {
  //generating a random number between 1 to 3
  const randomNumber = Math.ceil(Math.random() * 3); // or we can write 3 directly
  /*  array will help in getting a random value by
    using randomNumber as its index*/
  const options = ["rock", "paper", "scissors"];
  //getting the random value from options array
  computerChoice = options[randomNumber - 1];
  //if computer choice is rock
  if (computerChoice === "rock") {
    //displaying rock image
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/img/rock.jpg' alt='rock'>";
  }
  if (computerChoice === "paper") {
    //displaying paper image
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/img/paper.jpg' alt='rock'>";
  }
  if (computerChoice === "scissors") {
    //displaying scissors image
    computerChoiceDisplay.innerHTML =
      "<img class='computer-choice' src='assets/img/scissors.jpg' alt='rock'>";
  }
}

export { generateComputerChoice as default, computerChoice };
