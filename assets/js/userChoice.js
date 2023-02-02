import generateComputerChoice, { computerChoice } from "./computerChoice.js";
import getResult from "./result.js";

//get the all 3 user choices buuton having images
const possibleChoices = document.getElementsByClassName("choice");
//get rock button
const rock = document.getElementById("rock-button");
//get paper button
const paper = document.getElementById("paper-button");
//get scissors button
const scicssors = document.getElementById("scissors-button");

//variable declarations
let userChoice;
console.log(possibleChoices);
//getUserChoice function
const getUserChoice = () => {
  /*getting all buttons one by one and 
  adding onClick event listeners to each of them*/

  Array.from(possibleChoices).forEach((possibleChoice) =>
    possibleChoice.addEventListener("click", (e) => {
      //getting button id, but here we will get image id as button contains image
      userChoice = e.target.id;

      //if user choice is rock
      if (userChoice === "rock") {
        //adding animate-up class to the rock button
        rock.classList.add("animate-up");
        //removing animate-up class name from paper and scissors buttons
        paper.classList.remove("animate-up");
        scicssors.classList.remove("animate-up");
      }
      //if user choice is rock
      if (userChoice === "paper") {
        //adding animate-up class to the paper button
        paper.classList.add("animate-up");
        //removing animate-up class name from rock and scissors buttons
        rock.classList.remove("animate-up");
        scicssors.classList.remove("animate-up");
      }
      //if user choice is rock
      if (userChoice === "scissors") {
        //adding animate-up class to the scicssors button
        scicssors.classList.add("animate-up");
        //removing animate-up class name from parock and paper buttons
        rock.classList.remove("animate-up");
        paper.classList.remove("animate-up");
      }

      //generating a random choice for computer
      generateComputerChoice();
      //   getting result based on computer choice and user choice
      getResult(computerChoice, userChoice);
    })
  );
};

export { getUserChoice as default, userChoice };
