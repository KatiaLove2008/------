const btn = document.getElementById('secret-gift-btn');
const message = document.getElementById('gift-message');
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');

let confettiPieces = [];
let animationFrameId;

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function createConfettiPiece() {
  return {
    x: randomRange(0, window.innerWidth),
    y: randomRange(-20, 0),
    r: randomRange(5, 10),
    d: randomRange(10, 30),
    color: `hsl(${randomRange(0, 360)}, 100%, 60%)`,
    tilt: randomRange(-10, 10),
    tiltAngle: 0,
    tiltAngleIncrement: randomRange(0.05, 0.1),
  };
}

function initConfetti() {
  confettiPieces = [];
  for (let i = 0; i < 150; i++) {
    confettiPieces.push(createConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiPieces.forEach(p => {
    ctx.beginPath();
    ctx.lineWidth = p.r / 2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
    ctx.stroke();
  });
}

function updateConfetti() {
  confettiPieces.forEach(p => {
    p.tiltAngle += p.tiltAngleIncrement;
    p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
    p.tilt = Math.sin(p.tiltAngle) * 15;

    if (p.y > window.innerHeight) {
      p.x = randomRange(0, window.innerWidth);
      p.y = randomRange(-20, 0);
    }
  });
}

function animate() {
  drawConfetti();
  updateConfetti();
  animationFrameId = requestAnimationFrame(animate);
}

btn.addEventListener('click', () => {
  // Показати повідомлення
  message.classList.remove('hidden');

  // Показати канвас і запустити анімацію
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.remove('hidden');

  initConfetti();
  animate();

  // Прибрати анімацію і повідомлення через 5 секунд
  setTimeout(() => {
    cancelAnimationFrame(animationFrameId);
    canvas.classList.add('hidden');
    message.classList.add('hidden');
  }, 5000);
});
