let queue = document.querySelector(".queue");
let startBtn = document.getElementById("start-btn");
let stopBtn = document.getElementById("stop-btn");
let animationInterval;

function startQueue() {
  let rightPosition = 0;
  animationInterval = setInterval(() => {
    rightPosition += 1;
    if (Math.abs(rightPosition) >= 60) {
      rightPosition = 0;
      queue.insertBefore(queue.lastElementChild, queue.firstElementChild);
    }
    queue.style.right = rightPosition + "px";
  }, 20);
}

function stopQueue() {
  clearInterval(animationInterval);
}
startBtn.addEventListener("click", startQueue);
stopBtn.addEventListener("click", stopQueue);
