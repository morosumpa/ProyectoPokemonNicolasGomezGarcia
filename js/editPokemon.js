"use strict";

// Función que se ejecutará al enviar el formulario en 003pkms.html
function onSubmitForm() {
    // Obtiene los valores del formulario
    let nuevoNombre = document.getElementById('pokemonName').value;
    let nuevoTipo = document.getElementById('pokemonType').value;
    let nuevoSubtipo = document.getElementById('pokemonSubtype').value;
    let nuevaRegion = document.getElementById('pokemonRegion').value;

    // Verifica si los valores son válidos 
    if (nuevoNombre && nuevoTipo && nuevoSubtipo && nuevaRegion) {
        // Redirecciona a la página 002pkms.html
        window.location.href = "002pkms.html";
        alert("todo ha sido introducido correctamente");
    } else {
        console.error("Por favor, completa todos los campos del formulario.");
    }

    // ya que no tiene que funcionar como tal el envio uso false para que este se corte
    return false;
}
