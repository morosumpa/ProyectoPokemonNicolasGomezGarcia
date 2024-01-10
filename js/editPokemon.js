"use strict";

// Función para editar un Pokémon y almacenar datos en sessionStorage
function editarPokemon(id) {
    let fila = document.querySelector('[data-id="' + id + '"]');

    if (fila) {
        let nombre = fila.cells[2].innerText;
        let tipo = fila.cells[3].innerText;
        let subtipo = fila.cells[4].innerText;
        let region = fila.cells[5].innerText;

        // Almacena los datos del Pokémon en sessionStorage
        sessionStorage.setItem('pokemonId', id);
        sessionStorage.setItem('pokemonNombre', nombre);
        sessionStorage.setItem('pokemonTipo', tipo);
        sessionStorage.setItem('pokemonSubtipo', subtipo);
        sessionStorage.setItem('pokemonRegion', region);

        // Redirige a la página de edición
        window.location.href = "003pkms.html";
    } else {
        console.error("Fila no encontrada para el ID: " + id);
    }
}

// Función para cargar datos en el formulario en 003pkms.html
function cargarDatosEnFormulario() {
    // Obtiene los datos almacenados en sessionStorage
    let id = sessionStorage.getItem('pokemonId');
    let nombre = sessionStorage.getItem('pokemonNombre');
    let tipo = sessionStorage.getItem('pokemonTipo');
    let subtipo = sessionStorage.getItem('pokemonSubtipo');
    let region = sessionStorage.getItem('pokemonRegion');

    // Verifica si todos los datos están presentes
    if (id && nombre && tipo && subtipo && region) {
        // Rellena el formulario con los datos del Pokémon
        document.getElementById('pokemonId').value = id;
        document.getElementById('pokemonName').value = nombre;
        document.getElementById('pokemonType').value = tipo;
        document.getElementById('pokemonSubtype').value = subtipo;
        document.getElementById('pokemonRegion').value = region;
    } else {
        console.error("Datos del Pokémon no encontrados en sessionStorage.");
    }
}

// Función para actualizar los valores en la tabla y también se utiliza para cargar valores en el formulario
function actualizarYGuardarCambios() {
    // Obtiene los valores del formulario
    let id = document.getElementById('pokemonId').value;
    let nuevoNombre = document.getElementById('pokemonName').value;
    let nuevoTipo = document.getElementById('pokemonType').value;
    let nuevoSubtipo = document.getElementById('pokemonSubtype').value;
    let nuevaRegion = document.getElementById('pokemonRegion').value;

    // Actualiza los valores en la tabla
    let fila = document.getElementById('fila_' + id);
    fila.cells[2].innerText = nuevoNombre;
    fila.cells[3].innerText = nuevoTipo;
    fila.cells[4].innerText = nuevoSubtipo;
    fila.cells[5].innerText = nuevaRegion;

    // Limpia los datos almacenados en sessionStorage
    sessionStorage.removeItem('pokemonId');
    sessionStorage.removeItem('pokemonNombre');
    sessionStorage.removeItem('pokemonTipo');
    sessionStorage.removeItem('pokemonSubtipo');
    sessionStorage.removeItem('pokemonRegion');
}

// Función que se ejecutará al enviar el formulario en 003pkms.html
function onSubmitForm() {
    // Llamada a la función para actualizar y guardar cambios
    actualizarYGuardarCambios();
}
