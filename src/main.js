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
  if (clickCount.count === 10) {
    document.documentElement.style.backgroundColor = "lightblue";
  }
};
const downCount = () => {
  clickCount.count -= 1;
  countDisplay.textContent = `Count: ${clickCount.count}`;
  if (clickCount.count < 10) {
    document.documentElement.style.backgroundColor = "white";
  }
};
const resetCount = () => {
  clickCount.count = 0;
  countDisplay.textContent = `Count: ${clickCount.count}`;
  document.documentElement.style.backgroundColor = "white";
};
// event listeners
incrementButton.addEventListener("click", upCount);
decrementButton.addEventListener("click", downCount);
resetButton.addEventListener("click", resetCount);
