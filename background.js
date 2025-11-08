const c = document.getElementById("cyber");
const ctx = c.getContext("2d");
c.width = innerWidth;
c.height = innerHeight;

let stars = Array.from({ length: 100 }, () => ({
  x: Math.random() * c.width,
  y: Math.random() * c.height,
  size: Math.random() * 2,
  speed: Math.random() * 0.5 + 0.2
}));

function draw() {
  ctx.fillStyle = "rgba(7, 1, 22, 0.2)";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "#fffffeff";

  for (let s of stars) {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fill();

    s.y += s.speed;
    if (s.y > c.height) s.y = 0;
  }

  requestAnimationFrame(draw);
}
draw();



