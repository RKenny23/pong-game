import Ball from './ball.js';
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById('ball'))

const player1 = new Paddle(document.getElementById("player1"));
const player2 = new Paddle(document.getElementById("player2"));

const playerScore = document.getElementById("player-score")
const computerScore = document.getElementById("computer-score")

// Game loop
let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta, [player1.rect(), player2.rect()])
    player2.update(delta, ball.y)
    const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))

    document.documentElement.style.setProperty("--hue", hue + delta * .01)

    if (isLose()) handleLose()    
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

// Checks if ball is out of bounds
function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

// Increments score
function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth ) {
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
  } else if (rect.left <= window.innerWidth ){
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
  }
  ball.reset();
}

// Player controls
document.addEventListener("mousemove", e => {

  player1.position = (e.y / window.innerHeight) * 100

  // Prevents paddle from moving off-screen
  if (player1.position > 94){
    player1.position = 94
  } else if (player1.position < 6) {
    player1.position = 6 
  }
});

window.requestAnimationFrame(update)