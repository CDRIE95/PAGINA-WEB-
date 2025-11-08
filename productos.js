fetch("productos.json")
  .then(res => res.json())
  .then(productos => {
    document.getElementById("root").innerHTML = `
      <header class="w-full h-[100px] bg-orange-500 flex justify-between items-center px-8 text-white">
        <div class="flex items-center space-x-3 cursor-pointer" onclick="window.location.href='index.html'">
          <img src="imagenes/logo.jpg"
              alt="Logo" class="h-20 w-20 rounded-full p-1">
          <h1 class="font-[Fredoka_One] text-2xl">Happy Paws</h1>
        </div>
        <nav class="flex space-x-8 text-lg">
          <button onclick="window.location.href='index.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Home</button>
          <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Productos</button>
          <button onclick="window.location.href='contactanos.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Contáctanos</button>
          <button onclick="window.location.href='nosotros.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Nosotros</button>
          <button onclick="window.location.href='blog.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
          <button onclick="window.location.href='juego.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>
        </nav>
        <div class="flex items-center space-x-3">
          <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
          <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
        </div>
      </header>

      <main class="px-10 py-10">
        <h1 class="text-3xl md:text-4xl font-[Fredoka_One] text-center mb-12 text-black">
          PRODUCTOS PARA LOS ENGREÍDOS DEL HOGAR
        </h1>
        <div id="productosContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"></div>
      </main>

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

    const contenedor = document.getElementById("productosContainer");
    productos.forEach(prod => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-md rounded-xl p-4 w-[280px] flex flex-col items-center hover:scale-105 transition-transform duration-200";
      card.innerHTML = `
        <img src="${prod.imagen}" alt="${prod.nombre}" class="h-48 w-full object-cover rounded-lg mb-4">
        <h3 class="text-lg font-semibold mb-1">${prod.nombre}</h3>
        <p class="text-sm text-gray-700 mb-3 text-center">${prod.descripcion}</p>
        <div class="flex justify-between items-center w-full">
          <span class="text-gray-800 font-semibold">${prod.precio}</span>
          <button class="add-btn bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-300 transition-all">
            AÑADIR AL CARRITO
          </button>
        </div>
      `;
      contenedor.appendChild(card);
    });

    document.querySelectorAll(".add-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        btn.classList.toggle("bg-white");
        btn.classList.toggle("text-black");
      });
    });
  });