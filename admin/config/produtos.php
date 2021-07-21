<?php

include("../../config/db.php");


// getInfoProduto
if(isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = $mysqli->prepare("SELECT * FROM dropshippping WHERE ID = ?");
    $sql->bind_param("i", $id);
    $sql->execute();
    $result = $sql->get_result();
    $assoc = $result->fetch_assoc();
    $json = array('dropshipping' => $assoc);
    echo json_encode($json);

} else {
    $table = $mysqli -> query("SELECT * FROM dropshippping");
    
    // juntar os arrays
    $result = array();
    while($assoc = $table->fetch_assoc()) {
        array_push($result, $assoc);
    }
    $result = json_encode($result, JSON_FORCE_OBJECT);
    echo $result;

    $table->close();
}

header("Content-Type: application/json");
header("Accept: application/json");
// numero de produtos
