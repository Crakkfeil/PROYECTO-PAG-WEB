    var imagenActual = null; // Variable global para almacenar la imagen actual

    function subirImagen() {
      var input = document.getElementById('imagen');
      var file = input.files[0];
      
      if (file) {
        var reader = new FileReader();

        reader.onload = function(e) {
          var image = new Image();
          image.src = e.target.result;

          var contenedorImagen = document.getElementById('contenedor-imagen');

          if (imagenActual) {
            contenedorImagen.removeChild(imagenActual);
          }

          contenedorImagen.appendChild(image);

          imagenActual = image;

          // Almacenar la imagen en el almacenamiento local del navegador
          localStorage.setItem('imagen', e.target.result);
        };

        reader.readAsDataURL(file);
      }
    }

    // Verificar si hay una imagen almacenada en el almacenamiento local al cargar la página
    window.onload = function() {
      var imagenAlmacenada = localStorage.getItem('imagen');
      if (imagenAlmacenada) {
        var image = new Image();
        image.src = imagenAlmacenada;

        var contenedorImagen = document.getElementById('contenedor-imagen');
        contenedorImagen.appendChild(image);

        imagenActual = image;
      }
    }