document.getElementById("root").innerHTML = `

  <header class="w-full h-[100px] bg-orange-500 flex justify-between items-center px-8 text-white">

    <div class="flex items-center space-x-3">
      <img src="imagenes/logo.jpg"
           alt="Logo" class="h-20 w-20 rounded-full p-1">
    <h1 class="font-[Fredoka_One] text-2xl">Happy Paws</h1>
    </div>


    <nav class="flex space-x-8 text-lg">
      <button onclick="window.location.href='index.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Home</button>
    <button onclick="window.location.href='productos.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Productos</button>
    <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Contactanos</button>
    <button onclick="window.location.href='nosotros.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Nosotros</button>
    <button onclick="window.location.href='blog.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
    <button onclick="window.location.href='juego.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>
    </nav>


    <div class="flex items-center space-x-3">
      <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
      <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
    </div>
  </header>


  <section class="w-full flex flex-wrap justify-center items-start gap-10 mt-10 px-8">
    <!-- Formulario de contacto -->
    <div class="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-[Fredoka_One] text-orange-500 mb-6 text-center">Contáctanos</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700">Nombre</label>
          <input type="text" placeholder="Tu nombre"
                 class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700">Correo electrónico</label>
          <input type="email" placeholder="correo@ejemplo.com"
                 class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700">Teléfono</label>
          <input type="tel" placeholder="+51 999 888 777"
                 class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400">
        </div>

        <div>
          <label class="block text-sm font-semibold mb-1 text-gray-700">Mensaje</label>
          <textarea rows="4" placeholder="Escribe tu mensaje aquí..."
                    class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
        </div>

        <button type="button"
                class="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition-all">
          Enviar
        </button>
      </form>
    </div>


    <div class="w-full max-w-lg rounded-xl overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.794864951809!2d-77.0359423!3d-12.060121999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8be91b4e639%3A0x6a78e4aebf84d773!2sPet%20Center!5e0!3m2!1ses!2spe!4v1698297539214!5m2!1ses!2spe"
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>
  </section>


  <footer class="w-full bg-gray-900 text-white py-10 px-8 flex justify-between flex-wrap mt-12">
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