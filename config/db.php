<?php


try {
    $address = "127.0.0.1";
    $user = "root";
    $pass = "";
    $db = "estilocrente";
    $mysqli = new mysqli($address, $user, $pass, $db);
} catch (\Throwable $th) {
    echo "erro";
}