<?php
// Incluir el archivo de conexión a la base de datos
include("conexion.php");

// Verificar si se ha enviado el formulario de registro
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Obtener los datos del formulario
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Verificar si el usuario ya existe
    $consulta_existencia = "SELECT id FROM users WHERE username = ?";
    $stmt_existencia = $conexion->prepare($consulta_existencia);
    $stmt_existencia->bind_param("s", $username);
    $stmt_existencia->execute();
    $stmt_existencia->store_result();

    if ($stmt_existencia->num_rows > 0) {
        // El usuario ya existe
        echo "El nombre de usuario ya está en uso.";
    } else {
        // Hash de la contraseña
        $password_hash = password_hash($password, PASSWORD_DEFAULT);

        // Consulta para insertar el nuevo usuario
        $consulta_insercion = "INSERT INTO users (username, password_hash) VALUES (?, ?)";
        $stmt_insercion = $conexion->prepare($consulta_insercion);
        $stmt_insercion->bind_param("ss", $username, $password_hash);
        $stmt_insercion->execute();

        if ($stmt_insercion->affected_rows > 0) {
            // Usuario registrado con éxito
            header("Location: login.php"); 
            exit(); 
        } else {
            // Error al registrar el usuario
            echo "Error al registrar el usuario.";
        }
    }

    $stmt_existencia->close();
    $stmt_insercion->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro</title>
    <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
            crossorigin="anonymous"
        />
        <script defer
            src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>

        <script defer
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
    <script defer src="js/signin_validation.js"></script>
</head>
<body>
    <h2>Registrarse</h2>
    <form id="signinForm" action="signin.php" method="post">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Registrarse</button>
    </form>
    <footer>
    <p>&copy; Copyright Proyecto Pokémon - <?php echo date("Y"); ?></p>
</footer>

</body>
</html>
