import Ball from './Ball.js';

const ball = new Ball(document.getElementById('ball'))


const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

let lastTime;
function update(time) {
  if (lastTime != null) {
    const delta = time - lastTime
    ball.update(delta)
  }
  
  lastTime = time
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)