import confetti from 'canvas-confetti';


export const runConfetti = () => {
    var end = Date.now() + (15 * 100);

// go Buckeyes!
var colors = ['#6C6A61]', '#45423D', '#181A1B'];

(function frame() {
  confetti({
    particleCount: 1,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors
  });
  confetti({
    particleCount: 1,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
}())};