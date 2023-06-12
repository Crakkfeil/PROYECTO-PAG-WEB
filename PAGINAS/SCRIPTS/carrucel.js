$(document).ready(function() {
  $(".PlatosCont").hover(
    function() {
      $(this).find(".Carrusel").stop().animate({ "margin-left": "-1700px" }, 1000);
    },
    function() {
      $(this).find(".Carrusel").stop().animate({ "margin-left": "0" }, 1000);
    }
  );
});

$(document).ready(function(){
    $(".BebidaCont").hover(
    function() {
      $(this).find(".carrucelbebida").stop().animate({ "margin-left": "-1700px" }, 1000);
    },
    function() {
      $(this).find(".carrucelbebida").stop().animate({ "margin-left": "0" }, 1000);
    }
  );
})

