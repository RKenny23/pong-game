import Ball from './Ball.js';
import Paddle from './Paddle.js'

const ball = new Ball(document.getElementById('ball'))


const player1 = new Paddle(document.getElementById("player1"));
const player2 = new Paddle(document.getElementById("player2"));

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta)
    player2.update(delta, ball.y)
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

document.addEventListener("mousemove", e => {
  player1.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)