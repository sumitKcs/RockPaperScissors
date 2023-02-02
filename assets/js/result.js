const resultDisplay = document.getElementById("result");
const win = document.getElementById("win");
const lose = document.getElementById("lose");
const draw = document.getElementById("draw");

export default function getResult(computerChoice, userChoice) {
  let result;
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
    //play the draw sound
    draw.play();
    //creating span element to display the draw result
    result = `<span style="color: yellow; font-size:2rem;">draw!</span>`;
  }
  if (result === "you win!") {
    //play the win sound
    win.play();
    //creating span element to display the win result
    result = `<span style="color: green; font-size:2rem;">you win!</span>`;
  }
  if (result === "you lost!") {
    //play the lose sound
    lose.play();
    //creating span element to display the lose result
    result = `<span style="color: red; font-size:2rem;">you lost!</span>`;
  }
  //display the result
  resultDisplay.innerHTML = result;
}
