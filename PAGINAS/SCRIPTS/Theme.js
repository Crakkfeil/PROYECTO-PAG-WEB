        // Espera a que el DOM esté completamente cargado
        document.addEventListener('DOMContentLoaded', function () {
            const claro = document.getElementById('claro');
            const oscuro = document.getElementById('oscuro');
            const elementosItem = document.getElementsByClassName('Item');


            claro.addEventListener('click', function () {
                // Aquí puedes escribir el código que deseas ejecutar cuando se presione el botón
                document.getElementById('theme').style.backgroundColor="#F2C9C1"
                document.getElementById('conten').style.backgroundColor="white"
                document.getElementById('titulocont').style.backgroundColor="#ebc982"
                document.getElementById('TituloRegistro').style.color="rgb(44, 44, 44)"
                document.getElementById('ContenidoReg').style.color="rgb(44, 44, 44)"
    
                for (let i = 0; i < elementosItem.length; i++) {
                elementosItem[i].style.backgroundColor = 'white';
                elementosItem[i].style.color = 'black';
                }
            });

            oscuro.addEventListener('click', function () {
                // Aquí puedes escribir el código que deseas ejecutar cuando se presione el botón
                document.getElementById('theme').style.backgroundColor="rgb(44, 42, 32)"
                document.getElementById('conten').style.backgroundColor="black"
                document.getElementById('titulocont').style.backgroundColor="#413735"
                document.getElementById('TituloRegistro').style.color="white"
                document.getElementById('ContenidoReg').style.color="white"
                
                 
                for (let i = 0; i < elementosItem.length; i++) {
                elementosItem[i].style.backgroundColor = '#413735';
                elementosItem[i].style.color = 'white';
                    }
            });
            
        });