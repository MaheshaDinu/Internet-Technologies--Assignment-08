let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let animationInterval;

const colors = ["Red", "green", "blue", "yellow", "pink", "plum"];
function startQue() {
  animationInterval = setInterval(() => {
    colors.unshift(colors.pop());
    for (let i = 1; i <= colors.length; i++) {
      document.getElementById("box" + i).style.backgroundColor = colors[i - 1];
    }
  }, 1000);
}
function stopQue() {
  clearInterval(animationInterval);
}
startBtn.addEventListener("click", startQue);
stopBtn.addEventListener("click", stopQue);
