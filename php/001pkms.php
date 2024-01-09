<?php
include("conexion.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>
    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Proyecto Pokémon</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.php">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="002pkms.php">Editar/Borrar Pokémon</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="003pkms.php">Ordenar Pokémon</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <?php
        // Realiza la consulta para obtener todos los Pokémon
        $consulta_pokemons = "SELECT * FROM pokemons";
        $resultado_pokemons = $conexion->query($consulta_pokemons);

        // Verifica si hay resultados
        if ($resultado_pokemons->num_rows > 0) {
            echo "<table border='1'>";
            echo "<tr><th>ID</th><th>Nombre</th><th>Tipo</th><th>Subtipo</th><th>Región</th></tr>";

            // Itera sobre los resultados y muestra cada Pokémon
            while ($fila = $resultado_pokemons->fetch_assoc()) {
                echo "<tr>";
                echo "<td>{$fila['id']}</td>";
                echo "<td>{$fila['name']}</td>";
                echo "<td>{$fila['type']}</td>";
                echo "<td>{$fila['subtype']}</td>";
                echo "<td>{$fila['region']}</td>";
                echo "</tr>";
            }

            echo "</table>";
        } else {
            // Si no hay resultados, muestra un mensaje
            echo "No hay Pokémon en la base de datos.";
        }

        ?>

    </div>
</body>

</html>