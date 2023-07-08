
  function handleViewportChange() {

  }
$(document).ready(function() {
  handleViewportChange();
  $(window).on("resize", handleViewportChange);

  setInterval(function() {
    $(".PlatosCont").each(function() {
      if (window.innerWidth >= 0 && window.innerWidth > 600) {
        var carrusel = $(this).find(".Carrusel");
        var marginLeft = parseInt(carrusel.css("margin-left"));
        if (marginLeft <= -1700) {
          marginLeft = 0;
        } else {
          marginLeft -= 100;
        }
        carrusel.stop().animate({ "margin-left": marginLeft + "px" }, 1000);
      }
    });
    
    $(".BebidaCont").each(function() {
      if (window.innerWidth >= 0 && window.innerWidth > 600) {
        var carrusel = $(this).find(".carrucelbebida");
        var marginLeft = parseInt(carrusel.css("margin-left"));
        if (marginLeft <= -1700) {
          marginLeft = 0;
        } else {
          marginLeft -= 100;
        }
        carrusel.stop().animate({ "margin-left": marginLeft + "px" }, 1000);
      }
    });

  }, 1000); // Intervalo de tiempo en milisegundos (1 segundo en este caso)

});
