"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let eliminarbtn = document.querySelectorAll(".eliminar-btn");

    eliminarbtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            let id = btn.getAttribute("data-id");
            eliminarPokemon(id);
        });
    });
});
function eliminarPokemon(id) {
    // Obtiene el modal
    let modal = document.getElementById("confirmModal");

    // Muestra el modal
    modal.style.display = "block";

    // Obtiene los elementos de los botones en el modal
    let btnConfirmar = document.getElementById("btnConfirmar");
    let btnCancelar = document.getElementById("btnCancelar");

    //boton de confirmar
    btnConfirmar.onclick = function () {
        // Oculta el modal
        modal.style.display = "none";
        console.log("El Pokémon con ID " + id + " ha sido eliminado correctamente.");
    };

    //boton de cancelar
    btnCancelar.onclick = function () {
        // Oculta el modal
        modal.style.display = "none";
        console.log("Se canceló el proceso de eliminación del Pokémon  con ID " + id);
    };
}