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
        window.location.href = "001pkms.html";
        alert("todo ha sido introducido correctamente");
    } else {
        console.error("Por favor, completa todos los campos del formulario.");
    }

    // ya que no tiene que funcionar como tal el envio uso false para que este se corte
    return false;
}

// Función para deshabilitar opciones iguales en Tipo y Subtipo
function onTypeChange() {
    let tipoSeleccionado = document.getElementById('pokemonType').value;
    let subtipoSelect = document.getElementById('pokemonSubtype');

    // Habilita todas las opciones
    for (let i = 0; i < subtipoSelect.options.length; i++) {
        subtipoSelect.options[i].disabled = false;
    }

    // Deshabilita la opción seleccionada en Tipo en Subtipo
    for (let i = 0; i < subtipoSelect.options.length; i++) {
        if (subtipoSelect.options[i].value === tipoSeleccionado) {
            subtipoSelect.options[i].disabled = true;
        }
    }
}

function onSubTypeChange() {
    let subtipoSelect = document.getElementById('pokemonSubtype').value;
    let tipoSeleccionado = document.getElementById('pokemonType');


    // Habilita todas las opciones
    for (let i = 0; i < tipoSeleccionado.options.length; i++) {
        tipoSeleccionado.options[i].disabled = false;
    }

    // Deshabilita la opción seleccionada en Tipo en Subtipo
    for (let i = 0; i < tipoSeleccionado.options.length; i++) {
        if (tipoSeleccionado.options[i].value === subtipoSelect) {
            tipoSeleccionado.options[i].disabled = true;
        }
    }
}
