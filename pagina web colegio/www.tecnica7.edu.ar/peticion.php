<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $email = $_POST["email"];
    $telefono = $_POST["telefono"];
    $grado = $_POST ["grado"];
    $comentarios = $_POST ["comentarios"];
    var_dump($nombre, $apellido, $email, $telefono, $grado, $comentarios);
    exit();
}
?>
