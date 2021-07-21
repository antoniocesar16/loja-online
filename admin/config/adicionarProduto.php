<?php

$dbConfig = include("../../config/db.php");


try {
    if( !empty($_POST['url']) && !empty($_POST['nome_fornecedor']) && !empty($_POST['nome_produto']) && !empty($_POST['img']) && !empty($_POST['tipo']) ) {

        $produto = $mysqli -> prepare("INSERT INTO dropshipping(url, nome_fornecedor, nome_produto, img_path, tipo) VALUES(?, ?, ?, ?, ?)");
    
        $url = $_POST['url'];
        $nome_fornecedor = $_POST['nome_fornecedor'];
        $nome_produto = $_POST['nome_produto'];
        $img = $_POST['img'];
        $tipo = $_POST['tipo'];
        $produto->bind_param('ssssi', $url, $nome_fornecedor, $nome_produto, $img, $tipo);
        echo $produto->num_rows();
        $produto->execute();
    }
} catch (\Throwable $th) {
    echo 'Erro! Tente novamente ):';
}
