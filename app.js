
document.getElementById("root").innerHTML = `

  <header class="w-full h-[100px] bg-orange-500 flex justify-between items-center px-8 text-white">

    <div class="flex items-center space-x-3 cursor-pointer" onclick="window.location.href='index.html'">
      <img src="imagenes/logo.jpg"
           alt="Logo" class="h-20 w-20 rounded-full p-1">
      <h1 class="font-[Fredoka_One] text-2xl">Happy Paws</h1>
    </div>

    <nav class="flex space-x-8 text-lg">
      <button id="nav-home" class="nav-btn bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Home</button>
      <button id="nav-productos" class="nav-btn hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Productos</button>
      <button id="nav-contacto" class="nav-btn hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Contáctanos</button>
      <button id="nav-nosotros" class="nav-btn hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Nosotros</button>
      <button id="nav-blog" class="nav-btn hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
      <button id="nav-juego" class="nav-btn hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>
    </nav>

 
    <div class="flex items-center space-x-3">
      <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
      <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
    </div>
  </header>


  <section class="relative w-full h-[75vh]">
    <img src="imagenes/fondo.jpg"
         alt="Mascotas" class="w-full h-full object-cover">


    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6">
      <button id="btn-perros" class="bg-white/75 px-6 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all">
        Productos para Perros
      </button>
      <button id="btn-gatos" class="bg-white/75 px-6 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all">
        Productos para Gatos
      </button>
      <button id="btn-conejos" class="bg-white/75 px-6 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all">
        Productos para Conejos
      </button>
    </div>
  </section>


  <footer class="w-full bg-gray-900 text-white py-10 px-8 flex justify-between flex-wrap">
    <div>
      <h2 class="font-[Fredoka_One] text-xl mb-2">Happy Paws</h2>
      <p class="max-w-xs text-sm leading-relaxed">
        Tu tienda de confianza para consentir a tus mascotas. <br>
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


document.getElementById("nav-home").addEventListener("click", () => {
  window.location.href = "index.html";
});

document.getElementById("nav-productos").addEventListener("click", () => {
  window.location.href = "productos.html";
});

document.getElementById("nav-contacto").addEventListener("click", () => {
  window.location.href = "contactanos.html";
});

document.getElementById("btn-perros").addEventListener("click", () => {
  window.location.href = "productos.html";
});

document.getElementById("btn-gatos").addEventListener("click", () => {
  window.location.href = "productos.html";
});

document.getElementById("btn-conejos").addEventListener("click", () => {
  window.location.href = "productos.html";
});

document.getElementById("nav-nosotros").addEventListener("click", () => {
  window.location.href = "nosotros.html";
});
document.getElementById("nav-blog").addEventListener("click", () => {
  window.location.href = "blog.html";
});
document.getElementById("nav-juego").addEventListener("click", () => {
  window.location.href = "juego.html";
});

const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("bg-white", "text-black"));
    btn.classList.add("bg-white", "text-black");
  });
});