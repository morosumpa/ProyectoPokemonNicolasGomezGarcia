// Obtiene el elemento del pie de página y establece su contenido
function actualizarAnio() {
    let fechaActual = new Date();
    let anio = fechaActual.getFullYear();
    let elementoFooter = document.getElementById('copyright');
    elementoFooter.innerHTML = '© Copyright Proyecto Pokémon - ' + anio;
}

// Llama a la función para actualizar el año al cargar la página
actualizarAnio();
