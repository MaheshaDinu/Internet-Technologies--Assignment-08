let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let animationInterval;
let currentIndex = 0;
let direction = 1; // 1 for forward, -1 for backward

// Array of colors for the fading effect
const colors = ["#FF0000", "#FF4D4D", "#FF9999", "#FFCCCC", "#FFEBEB"]; // Red gradient

function startLightEffect() {
  const boxes = document.querySelectorAll(".box");

  animationInterval = setInterval(() => {
    boxes.forEach((box) => {
      box.style.backgroundColor = "white";
    });
    for (let index = 0; index < boxes.length - 1; index++) {
      boxes[currentIndex + index].style.backgroundColor =
        colors[currentIndex + index];
    }

    currentIndex = currentIndex + 1;
  }, 500);
}

function stopLightEffect() {
  clearInterval(animationInterval);
  // Reset all boxes to the default dim color
  document
    .querySelectorAll(".box")
    .forEach((box) => (box.style.backgroundColor = "white"));
}

// Event listeners for Start and Stop buttons
startBtn.addEventListener("click", startLightEffect);
stopBtn.addEventListener("click", stopLightEffect);
