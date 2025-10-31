import "./style.css";
// Variables - same as console JavaScript
let clickCount = 0;

// Get references to HTML elements
const greetingElement = document.getElementById("greeting");
const button1 = document.getElementById("change-greeting");
const button2 = document.getElementById("reset-greeting");
const countElement = document.getElementById("click-count");
const inputElement = document.getElementById("manual-greeting");
// Function - same logic as console JavaScript
function updateGreeting() {
  clickCount++;
  greetingElement.textContent = "Hello, Browser JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount} `;
  if (clickCount === 5) {
    greetingElement.style.color = "red";
  }
}

const resetGreeting = () => {
  clickCount = 0;
  greetingElement.textContent = "Hello, Console JavaScript!";
  countElement.textContent = `Button clicks: ${clickCount} `;
};

const manualGreeting = () => {
  greetingElement.textContent = `${inputElement.value}`;
  if (inputElement.value === "") {
    greetingElement.textContent = "Hello, Console JavaScript!";
  }
};

// Event listener - this is new! Responds to user interaction
button1.addEventListener("click", updateGreeting);
button2.addEventListener("click", resetGreeting);
inputElement.addEventListener("change", manualGreeting);
