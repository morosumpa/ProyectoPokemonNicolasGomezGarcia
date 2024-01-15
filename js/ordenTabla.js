function cambiarDireccion(indice) {
    let procesoCambio; 
    let contador = 0;
    let tabla = document.getElementById("pokemonTable");
    let cambios = true;
    // Establece la dirección inicial como ascendente
    let direccion = "asc";

    while (cambios) {
        cambios = false;
        let filas = tabla.rows;

        for (let i = 1; i < (filas.length - 1); i++) {
            procesoCambio = false;
            let x = filas[i].getElementsByTagName("td")[indice];
            let y = filas[i + 1].getElementsByTagName("td")[indice];

            if (direccion === "asc") {
                procesoCambio = x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase();
            } else if (direccion === "desc") {
                procesoCambio = x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase();
            }

            if (procesoCambio) {
                filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
                cambios = true;
                contador++;
            }
        }

        if (contador === 0 && direccion === "asc") {
            direccion = "desc";
            cambios = true;
        }
    }
}
