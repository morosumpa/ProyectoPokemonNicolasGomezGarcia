"use strict";
function eliminarPokemon(id) {
    if (confirm("¿Estás seguro que quieres eliminar?")) {
        // Si el usuario hace clic en "Sí", muestra un mensaje de éxito 
        alert("El Pokémon ha sido eliminado correctamente.");
    } else {
        alert("Se cancelo el proceso.");
    }
}