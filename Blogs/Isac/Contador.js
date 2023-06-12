var counterElement = document.getElementById('counter');

// Verificar si hay un contador almacenado en el almacenamiento local
if (localStorage.getItem('counter')) {
  // Si existe, letobtener el valor del contador del almacenamiento local y mostrarlo
  var count = parseInt(localStorage.getItem('counter'));
  counterElement.textContent = count;
} else {
  // Si no existe, establecer el contador en 0 y guardarlo en el almacenamiento local
  var count = 0;
  localStorage.setItem('counter', count);
}

// Incrementar el contador y actualizar el almacenamiento local al recargar la página
count++;
localStorage.setItem('counter', count);
counterElement.textContent = count;
