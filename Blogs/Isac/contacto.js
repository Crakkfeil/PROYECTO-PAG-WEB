const resultado = document.getElementById("resultado")
function rellenadatos()
{

let nombre = document.getElementById("nombre").value
let email = document.getElementById("email").value
let mensaje = document.getElementById("mensaje").value
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    rellenadatos(); 
});
  
resultado.textContent = `Hola ${nombre} consumiras en su visita ${email} en la hora establecida ${mensaje}`
}