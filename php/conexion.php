<?php

$host = "localhost"; 
$usuario = "root"; 
$contrasena = ""; 
$base_datos = "pokemon";

// Crea la conexión a la base de datos
$conexion = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verifica la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

$conexion->set_charset("utf8");

?>
