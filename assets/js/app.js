import getUserChoice, { userChoice } from "./userChoice.js";

//get the start screen
const startScreen = document.getElementById("play-container");
//get the start button
const startButton = document.getElementById("start-button");
//get the main screen
const main = document.querySelector("main");
//get the theme sound
const theme = document.getElementById("theme");
//get the modal container box
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const modalButton = document.getElementById("modal-button");
// Get the <span> (x) element that closes the modal
const modalCloseButton = document.getElementsByClassName("modal-close")[0];

//hides the <main> tag content as the page loads
main.style.display = "none";

//start button onclick function, it will hide the start screen and show the main screen
startButton.addEventListener("click", (e) => {
  // play the theme sound
  theme.play();
  //hide the play screen
  startScreen.style.display = "none";
  // show the main screen
  main.style.display = "";
});

// It will get user choice on button click
//and generates a random computer choice and decide the result bases on choices
getUserChoice();

/*modal logic start here*/
/*When the user clicks the button, open the modal*/
modalButton.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
modalCloseButton.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
