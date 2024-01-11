"use strict";
document.addEventListener("DOMContentLoaded", function () {
    let fechaActual = new Date();
    let mes = fechaActual.getMonth();
    let estacion;

    if (mes >= 2 && mes <= 4) {
        estacion = 'spring'; // Primavera 
    } else if (mes >= 5 && mes <= 7) {
        estacion = 'summer'; // Verano 
    } else if (mes >= 8 && mes <= 10) {
        estacion = 'autumn'; // Otoño 
    } else {
        estacion = 'winter'; // Invierno 
    }

    // Cambia los estilos según la estación
    cambiarEstilosPorEstacion(estacion);

    // Función para cambiar los estilos según la estación
    function cambiarEstilosPorEstacion(estacion) {
        // Quita clases existentes del body, header y footer
        document.body.classList.remove('spring-theme', 'summer-theme', 'autumn-theme', 'winter-theme');
        document.getElementById('header').classList.remove('spring-theme', 'summer-theme', 'autumn-theme', 'winter-theme');
        document.getElementById('footer').classList.remove('spring-theme', 'summer-theme', 'autumn-theme', 'winter-theme');

        // Añade la clase correspondiente a la estación al body, header y footer
        document.body.classList.add(estacion + '-theme');
        document.getElementById('header').classList.add(estacion + '-theme');
        document.getElementById('footer').classList.add(estacion + '-theme');

        // Cambia el estilo de los botones
        cambiarEstiloBotones(estacion);
    }

    // Función para cambiar el estilo de los botones según la estación
    function cambiarEstiloBotones(estacion) {
        // Selecciona todos los elementos <a> y <button> con la clase 'btn'
        let botones = document.querySelectorAll('a.btn, button.btn');

        // Quita clases existentes de los botones
        botones.forEach(function (boton) {
            boton.classList.remove('spring-btn', 'summer-btn', 'autumn-btn', 'winter-btn');
        });

        // Añade la clase correspondiente a la estación a los botones
        botones.forEach(function (boton) {
            boton.classList.add(estacion + '-btn');
        });
    }
});
