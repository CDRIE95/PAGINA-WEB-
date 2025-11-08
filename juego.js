document.getElementById("root").innerHTML = `
<header class="w-full h-[100px] bg-orange-500 flex justify-between items-center px-8 text-white">
  <div class="flex items-center space-x-3 cursor-pointer" onclick="window.location.href='index.html'">
    <img src="imagenes/logo.jpg" alt="Logo" class="h-20 w-20 rounded-full p-1">
    <h1 class="font-[Fredoka_One] text-2xl">Happy Paws</h1>
  </div>
  <nav class="flex space-x-8 text-lg">
    <button onclick="window.location.href='index.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Home</button>
    <button onclick="window.location.href='productos.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Productos</button>
    <button onclick="window.location.href='contactanos.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Contáctanos</button>
    <button onclick="window.location.href='nosotros.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Nosotros</button>
    <button onclick="window.location.href='blog.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
    <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>
  </nav>
  <div class="flex items-center space-x-3">
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
  </div>
</header>

<main class="flex flex-col items-center justify-center py-10">
  <h1 class="text-3xl font-[Fredoka_One] text-orange-500 mb-6">🐶 Juego del Perrito Feliz 🦴</h1>
  <div class="bg-green-200 rounded-xl shadow-lg flex justify-center items-center p-4">
    <canvas id="gameCanvas" width="400" height="400" class="rounded-lg border-4 border-green-400 bg-green-100"></canvas>
  </div>
  <p id="statusText" class="mt-6 text-lg font-semibold text-gray-700"></p>
  <button id="restartBtn" class="hidden mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-all">Volver a jugar</button>
</main>

<footer class="w-full bg-gray-900 text-white py-10 px-8 flex justify-between flex-wrap mt-12">
  <div>
    <h2 class="font-[Fredoka_One] text-xl mb-2">Happy Paws</h2>
    <p class="max-w-xs text-sm leading-relaxed">
      Tu tienda de confianza para consentir a tus mascotas.<br>
      Productos de calidad, amor y cuidado para cada patita feliz.
    </p>
  </div>
  <div>
    <h2 class="font-[Fredoka_One] text-xl mb-2">Encuéntranos en:</h2>
    <ul class="space-y-1 text-sm">
      <li>📍 Calle mascotitas 333</li>
      <li>📞 +51 999 888 777</li>
      <li>✉️ happypaws@contact.pe</li>
    </ul>
  </div>
  <div>
    <h2 class="font-[Fredoka_One] text-xl mb-2">Síguenos en:</h2>
    <div class="flex space-x-4 text-2xl">
      <a href="#" class="hover:text-orange-400">📘</a>
      <a href="#" class="hover:text-orange-400">📷</a>
      <a href="#" class="hover:text-orange-400">🐦</a>
      <a href="#" class="hover:text-orange-400">💬</a>
    </div>
  </div>
</footer>
`;

// === Juego tipo Snake ===
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const box = 20;

let snake = [{ x: 200, y: 200 }];
let direction = "RIGHT";
let food = generateFood();
let gameOver = false;

document.addEventListener("keydown", changeDirection);

function changeDirection(e) {
  if (e.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (e.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (e.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (e.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function generateFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box,
  };
}

function drawGame() {
  if (gameOver) return;

  ctx.fillStyle = "#bbf7d0"; // fondo verde claro
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // dibujar comida (huesito)
  ctx.font = "20px Arial";
  ctx.fillText("🦴", food.x + 2, food.y + 18);

  // mover la serpiente (perrito)
  let headX = snake[0].x;
  let headY = snake[0].y;
  if (direction === "UP") headY -= box;
  if (direction === "DOWN") headY += box;
  if (direction === "LEFT") headX -= box;
  if (direction === "RIGHT") headX += box;

  const newHead = { x: headX, y: headY };

  // verificar colisión con bordes
  if (
    headX < 0 ||
    headX >= canvas.width ||
    headY < 0 ||
    headY >= canvas.height
  ) {
    endGame();
    return;
  }

  // verificar colisión con cuerpo
  for (let i = 0; i < snake.length; i++) {
    if (snake[i].x === newHead.x && snake[i].y === newHead.y) {
      endGame();
      return;
    }
  }

  snake.unshift(newHead);

  // comer huesito
  if (newHead.x === food.x && newHead.y === food.y) {
    food = generateFood();
  } else {
    snake.pop();
  }

  // dibujar perrito
  ctx.font = "18px Arial";
  snake.forEach((segment) => {
    ctx.fillText("🐶", segment.x + 2, segment.y + 18);
  });
}

function endGame() {
  gameOver = true;
  document.getElementById("statusText").textContent = "¡Perdiste! 😢";
  document.getElementById("restartBtn").classList.remove("hidden");
}

document.getElementById("restartBtn").addEventListener("click", () => {
  snake = [{ x: 200, y: 200 }];
  direction = "RIGHT";
  food = generateFood();
  gameOver = false;
  document.getElementById("statusText").textContent = "";
  document.getElementById("restartBtn").classList.add("hidden");
});

setInterval(drawGame, 150);
