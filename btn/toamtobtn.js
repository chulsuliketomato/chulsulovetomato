btnParty.addEventListener("click", () => {
  confetti("tsparticles", {
    angle: 90,
    count: 25,
    position: { x: 50, y: 50 },
    spread: 90,
    startVelocity: 60,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    colors: ["rgb(134, 0, 0);"],
    shapes: ["circle"],
    scalar: 1,
    zIndex: 2000,
    disableForReducedMotion: true
  });
});