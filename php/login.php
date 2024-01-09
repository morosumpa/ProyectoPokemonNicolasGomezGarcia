<?php
include("conexion.php");

// Verificar si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $username = $_POST["username"];
    $password = $_POST["password"];

    // Consulta para obtener el hash de la contraseña del usuario
    $consulta = "SELECT id, password_hash FROM users WHERE username = ?";
    $stmt = $conexion->prepare($consulta);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->bind_result($id, $password_hash);
    $stmt->fetch();
    $stmt->close();

    // Verificar la contraseña
    if (password_verify($password, $password_hash)) {
        // La contraseña es válida, el usuario está autenticado
        session_start();
        $_SESSION["user_id"] = $id;
        header("Location: index.php");
        exit();
    } else {
        // La contraseña es incorrecta
        $error_message = "Nombre de usuario o contraseña incorrectos.";
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
    <script defer src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
        crossorigin="anonymous"></script>

    <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
        integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
        crossorigin="anonymous"></script>
    <script defer src="login_validation.js"></script>

</head>

<body>
    <h2>Login</h2>

    <?php
    // Muestra el mensaje de error si existe
    if (isset($error_message)) {
        echo "<p>{$error_message}</p>";
    }
    ?>

    <form id="loginForm" action="login.php" method="post">
        <label for="username">Nombre de usuario:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Login</button>
    </form>

    <footer>
        <p>&copy; Copyright Proyecto Pokémon -
            <?php echo date("Y"); ?>
        </p>
    </footer>

</body>

</html>