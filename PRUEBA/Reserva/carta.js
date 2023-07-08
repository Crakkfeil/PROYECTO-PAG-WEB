// Array para almacenar los productos agregados al carrito
var cartItems = [];

// Obtener los elementos con la clase "add-to-cart"
var addToCartButtons = document.getElementsByClassName("add-to-cart");

// Recorrer los botones y agregar un evento "click" a cada uno
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener("click", addToCart);
}

// Función para agregar un producto al carrito
function addToCart() {
  var name = this.getAttribute("data-name");
  var price = parseFloat(this.getAttribute("data-price"));

  // Crear un objeto con el nombre y precio del producto
  var item = {
    name: name,
    price: price
  };

  // Agregar el objeto al array cartItems
  cartItems.push(item);

  // Actualizar la tabla del carrito
  updateCartTable();

  // Actualizar el total
  updateTotal();
}

// Función para actualizar la tabla del carrito
function updateCartTable() {
  var cartItemsTable = document.getElementById("cartItems");

  // Limpiar la tabla
  cartItemsTable.innerHTML = "";

  // Recorrer los productos en el carrito
  for (var i = 0; i < cartItems.length; i++) {
    var item = cartItems[i];

    // Crear una nueva fila en la tabla
    var row = document.createElement("tr");

    // Crear las celdas para el nombre y precio del producto
    var nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    var priceCell = document.createElement("td");
    priceCell.textContent = "$" + item.price;

    // Agregar las celdas a la fila
    row.appendChild(nameCell);
    row.appendChild(priceCell);

    // Agregar la fila a la tabla
    cartItemsTable.appendChild(row);
  }
}

// Obtener el botón de realizar pedido
var checkoutButton = document.querySelector(".checkout-button");

// Agregar un evento "click" al botón de realizar pedido
checkoutButton.addEventListener("click", checkout);

// Función para procesar el pedido
function checkout() {
  // Calcular el total del pedido sumando los precios de los productos en el carrito
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }

  // Mostrar el total en una alerta
  alert("Total del pedido: $" + total);

  // Limpiar el carrito
  cartItems = [];
  updateCartTable();

  // Actualizar el total
  updateTotal();
}

// Obtener el elemento donde se mostrará el total
var totalElement = document.getElementById("total");

// Función para actualizar el total
function updateTotal() {
  // Calcular el total sumando los precios de los productos en el carrito
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }

  // Mostrar el total en el elemento correspondiente
  totalElement.textContent = "Total: $" + total.toFixed(2);
}
// Función para redireccionar a la página de entrega (delivery) con el precio total como parámetro
function redirectToDelivery() {
  // Obtener el precio total
  var total = getTotal();

  // Redireccionar a la página de entrega con el precio total como parámetro en la URL
  window.location.href = "Delivery.html?total=" + total;
}

function redirectToReserva(){
  var total = getTotal();
  window.location.href = "Reservas.html?total=" + total
}

// Función para obtener el precio total del carrito
function getTotal() {
  var total = 0;
  for (var i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
  }
  return total.toFixed(2);
}


//Ofertas
function redirectToDeliveryOfertas() {
  // Obtener el precio total
  var total = getTotal();

  // Redireccionar a la página de entrega con el precio total como parámetro en la URL
  window.location.href = "../PRUEBA/Reserva/Delivery.html?total=" + total;
}

function redirectToReservaOfertas(){
  var total = getTotal();
  window.location.href = "../PRUEBA/Reserva/Reservas.html?total=" + total
}

