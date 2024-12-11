// Define the global variables
let correctColor;
let colors = [];

// Function to generate a random RGB color
function generateRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Function to pick a random color from the list of colors
function pickRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

// Function to set the color boxes
function setColorBoxes() {
  colors = [];
  for (let i = 0; i < 3; i++) {
    colors.push(generateRandomColor());
  }

  correctColor = pickRandomColor();
  document.getElementById("rgb").textContent = correctColor;

  // Randomly assign colors to the boxes
  const boxes = document.querySelectorAll(".color-box");
  boxes.forEach((box, index) => {
    box.style.backgroundColor = colors[index];
    box.addEventListener("click", function () {
      checkAnswer(box.style.backgroundColor);
    });
  });
}

// Function to check the user's answer
function checkAnswer(clickedColor) {
  if (clickedColor === correctColor) {
    document.getElementById("message").textContent = "Correct! You guessed the right color!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Wrong! Try again!";
    document.getElementById("message").style.color = "red";
  }
}

// Function to reset the game with new colors
function resetGame() {
  setColorBoxes();
  document.getElementById("message").textContent = "";
}

// Initialize the game
document.getElementById("reset").addEventListener("click", resetGame);

// Start the game when the page loads
window.onload = resetGame;

  