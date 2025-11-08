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
    <button class="bg-white text-black px-4 py-2 rounded-lg font-semibold transition-all">Nosotros</button>
    <button onclick="window.location.href='blog.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Blog</button>
    <button onclick="window.location.href='juego.html'" class="hover:bg-white hover:text-black px-4 py-2 rounded-lg font-semibold transition-all">Juego</button>

  </nav>
  <div class="flex items-center space-x-3">
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Iniciar sesión</button>
    <button class="bg-white text-black px-3 py-1 rounded-md font-semibold">Registrarse</button>
  </div>
</header>

<section class="px-8 py-16 text-gray-800">
  <h1 class="text-4xl font-[Fredoka_One] text-center mb-10 text-orange-500">Acerca de Happy Paws: Donde la Felicidad es una Pata</h1>

  <div class="flex flex-wrap justify-center items-center gap-10">
    <img src="imagenes/p7.jpg" alt="Happy Paws" class="w-full md:w-[500px] rounded-2xl shadow-lg">
    <div class="max-w-2xl text-lg leading-relaxed">
      <p class="mb-4">¡Hola! Somos <strong>Happy Paws</strong>. Más que una Pet Shop, somos un equipo de amantes incondicionales de los animales cuyo único objetivo es hacer la vida de tus mascotas más feliz, saludable y larga.</p>
      <p class="mb-4">Sabemos que tu perro, gato o cualquier otro compañero peludo es parte de tu familia. Por eso, en Happy Paws, no solo vendemos productos: ofrecemos tranquilidad, calidad y la certeza de que estás dándole lo mejor.</p>
    </div>
  </div>

  <div class="mt-14 max-w-5xl mx-auto space-y-8">
    <div>
      <h2 class="text-3xl font-[Fredoka_One] text-orange-500 mb-3">✨ Nuestra Misión</h2>
      <p>Enriquecer y prolongar la vida de las mascotas a través de una selección rigurosa de productos de la más alta calidad y un servicio al cliente experto y empático.</p>
    </div>
    <div>
      <h2 class="text-3xl font-[Fredoka_One] text-orange-500 mb-3">🌟 Nuestra Visión</h2>
      <p>Ser la Pet Shop de referencia, reconocida por nuestra ética, compromiso con la salud animal y por construir una comunidad de dueños informados y apasionados.</p>
    </div>
    <div>
      <h2 class="text-3xl font-[Fredoka_One] text-orange-500 mb-3">❤️ Los Pilares de Happy Paws</h2>
      <ul class="list-disc ml-8 space-y-2">
        <li><strong>Calidad y Seguridad:</strong> Solo encontrarás productos que nosotros mismos usaríamos con nuestras propias mascotas.</li>
        <li><strong>Conocimiento Experto:</strong> Nuestro equipo se capacita constantemente en nutrición, comportamiento y salud animal.</li>
        <li><strong>Pasión Genuina:</strong> Amamos lo que hacemos y queremos que lo sientas en cada interacción.</li>
      </ul>
    </div>
  </div>

  <div class="mt-14 text-center">
    <img src="imagenes/p8.jpg" alt="Equipo Happy Paws" class="w-full md:w-[600px] mx-auto rounded-2xl shadow-lg mb-6">
    <h3 class="text-2xl font-[Fredoka_One] text-orange-500 mb-2">🤝 Únete a la Familia Happy Paws</h3>
    <p>Te invitamos a visitarnos (física o virtualmente) y experimentar la diferencia de una Pet Shop donde cada pata cuenta.</p>
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
