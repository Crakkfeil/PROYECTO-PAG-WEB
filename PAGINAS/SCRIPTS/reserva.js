const resultado = document.getElementById("resultado")
function rellenadatos()
{

let Alumno = document.getElementById("Alumno").value
let Curso = document.getElementById("Carrera").value
let Turno = document.getElementById("Turno").value
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    rellenadatos(); 
});
  
resultado.textContent = `Hola ${Alumno} consumiras en su visita ${Curso} en la hora establecida ${Turno}`
}