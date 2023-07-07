var urlParams = new URLSearchParams(window.location.search);
var total = urlParams.get('total');
var totalElement = document.getElementById("total");
        totalElement.textContent = "S/" + total;



document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita que el formulario se envíe automáticamente

  // Obtener los valores de los campos del formulario
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var partySize = document.getElementById("partySize").value;
  //var selectedDishes = getSelectedOptions("dishes");
  //var selectedDrinks = getSelectedOptions("drinks");

  // Realizar la lógica de reserva (puedes adaptarla a tus necesidades)
  // Por ejemplo, mostrar una alerta con los detalles de la reserva
  var reservationDetails = "Su reserva ha sido realizada\n\n";
  reservationDetails += "Nombre: " + name + "\n";
  reservationDetails += "Email: " + email + "\n";
  reservationDetails += "Fecha: " + date + "\n";
  reservationDetails += "Hora: " + time + "\n";
  reservationDetails += "Tamaño del grupo: " + partySize + "\n";
  //reservationDetails += "Platos seleccionados:\n" + selectedDishes.join(", ") + "\n";
  //reservationDetails += "Bebidas seleccionadas:\n" + selectedDrinks.join(", ");
  
  var totalReservation = total * partySize
  reservationDetails += "Total a pagar: " +  totalReservation + " \n";


document.getElementById("resumen").innerText = reservationDetails;

  // Limpiar los campos del formulario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("partySize").value = "";
  uncheckAll("dishes");
  uncheckAll("drinks");
});

function getSelectedOptions(optionName) {
  var selectedOptions = [];
  var options = document.getElementsByName(optionName);

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOptions.push(options[i].value);
    }
  }

  return selectedOptions;
}

function uncheckAll(optionName) {
  var options = document.getElementsByName(optionName);

  for (var i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}
