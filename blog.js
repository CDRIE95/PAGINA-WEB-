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
    <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
    <button onclick="window.location.href='juego.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>
  </nav>
  <div class="flex items-center space-x-3">
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
  </div>
</header>

<section class="px-8 py-16 text-gray-800">
  <h1 class="text-4xl font-[Fredoka_One] text-center mb-10 text-orange-500">El Rincón de las Patas Felices</h1>
  <p class="text-center text-lg mb-10 max-w-3xl mx-auto">¡Bienvenido a la fuente de consejos para padres de mascotas! El Blog de Happy Paws es tu recurso de confianza para aprender, inspirarte y asegurarte de que tu mascota viva su vida más feliz y saludable.</p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
    <div class="bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
      <img src="imagenes/p9.jpg" alt="Consejos de alimentación" class="h-48 w-full object-cover">
      <div class="p-4">
        <h3 class="text-xl font-[Fredoka_One] text-orange-500 mb-2">Alimentación Saludable</h3>
        <p class="text-sm text-gray-700 mb-3">Descubre cómo elegir el alimento adecuado para tu mascota según su edad, tamaño y estilo de vida.</p>
        <button class="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-all">Leer más</button>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
      <img src="imagenes/p10.jpg" alt="Ejercicio para mascotas" class="h-48 w-full object-cover">
      <div class="p-4">
        <h3 class="text-xl font-[Fredoka_One] text-orange-500 mb-2">Juegos y Ejercicio</h3>
        <p class="text-sm text-gray-700 mb-3">Mantén a tu mascota activa y feliz con ideas de actividades y juguetes recomendados por expertos.</p>
        <button class="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-all">Leer más</button>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-md overflow-hidden w-[300px]">
      <img src="imagenes/p11.jpg" alt="Cuidado del pelaje" class="h-48 w-full object-cover">
      <div class="p-4">
        <h3 class="text-xl font-[Fredoka_One] text-orange-500 mb-2">Cuidado y Bienestar</h3>
        <p class="text-sm text-gray-700 mb-3">Aprende a mantener el pelaje, uñas y salud general de tu mascota con sencillos consejos diarios.</p>
        <button class="bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 transition-all">Leer más</button>
      </div>
    </div>
  </div>
</section>

<footer class="w-full bg-gray-900 text-white py-10 px-8 flex justify-between flex-wrap mt-12">
  <div>
    <h2 class="font-[Fredoka_One] text-xl mb-2">Happy Paws</h2>
    <p class="max-w-xs text-sm leading-relaxed">Tu tienda de confianza para consentir a tus mascotas.<br>Productos de calidad, amor y cuidado para cada patita feliz.</p>
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