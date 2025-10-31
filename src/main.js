import "./style.css";

// variables
const clickCount = { count: 0 };
const name = document.getElementById("name");
const incrementButton = document.getElementById("up-count");
const decrementButton = document.getElementById("down-count");
const resetButton = document.getElementById("reset-count");
const countDisplay = document.getElementById("click-count");

// functions
const upCount = () => {
  clickCount.count += 1;
  countDisplay.textContent = `Count: ${clickCount.count}`;
};
const downCount = () => {
  clickCount.count -= 1;
  countDisplay.textContent = `Count: ${clickCount.count}`;
};
const resetCount = () => {
  clickCount.count = 0;
  countDisplay.textContent = `Count: ${clickCount.count}`;
};
// event listeners
incrementButton.addEventListener("click", upCount);
decrementButton.addEventListener("click", downCount);
resetButton.addEventListener("click", resetCount);
