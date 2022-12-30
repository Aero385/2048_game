import { setGame, slideLeft, slideRight, slideUp, slideDown, score, gameRestart } from "./util.js";


// window.onload = function() {
//   setGame();
// }

document.addEventListener("keyup", (e) => {
  if(e.code == "ArrowLeft") {
   slideLeft();
  } 
  if(e.code == "ArrowRight") {
    slideRight();
  } 
  if(e.code == "ArrowUp") {
    slideUp();

  } 
  if(e.code == "ArrowDown") {
    slideDown();
  }
  document.getElementById('score').innerText = score; 
})
document.getElementById('left').addEventListener('click', slideLeft);
document.getElementById('up').addEventListener('click', slideUp);
document.getElementById('right').addEventListener('click', slideRight);
document.getElementById('down').addEventListener('click', slideDown);
document.querySelector('.start').addEventListener('click', setGame);
document.querySelector('.restart').addEventListener('click', gameRestart);

