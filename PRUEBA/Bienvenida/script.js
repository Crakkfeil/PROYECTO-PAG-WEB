// Espera 2 segundos (2000 milisegundos) y luego muestra el contenido principal
setTimeout(function() {
  var animationContainer = document.getElementById('animation-container');
  var content = document.getElementById('content');

  animationContainer.classList.add('hidden');
  content.style.opacity = '1';
  content.style.pointerEvents = 'auto';
}, 5000);
