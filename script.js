
const dice = document.getElementById("dice");
const resultText = document.getElementById("result-text");
const historyList = document.getElementById("history");

const rollSound = new Audio("sounds/roll.mp3");

function rollDice() {
  // Play sound
  rollSound.currentTime = 0;
  rollSound.play();

  // Reset animation
  dice.classList.remove("roll");
  void dice.offsetWidth;
  dice.classList.add("roll");

  // Generate dice number after delay
  setTimeout(() => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    dice.src = `images/dice${randomNum}.png`;
    resultText.textContent = `You rolled a ${randomNum}!`;

    // Update history
    const newEntry = document.createElement("li");
    newEntry.textContent = `🎲 ${randomNum}`;
    historyList.prepend(newEntry);
    if (historyList.children.length > 6) {
      historyList.removeChild(historyList.lastChild);
    }
  }, 600); // Wait for animation
}
