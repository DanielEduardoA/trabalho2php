<?php

    require_once('conexao.php');

    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $documento = $_POST['documento'];
    $dataNascimento = str_replace('/', '-', $_POST['dataNascimento']);
    $dataNascimentoFormatada= date('Y-m-d', strtotime($dataNascimento));
    $cidade = $_POST['cidade'];
    $estado = $_POST['estado'];

    if($id == ""){
        $sql = "insert into clientes (nome, documento, data_nascimento, cidade, estado) values ('$nome', '$documento', '$dataNascimentoFormatada', '$cidade', '$estado')";
    }else{
        $sql = "update clientes set nome = '$nome', documento = '$documento', data_nascimento = '$dataNascimentoFormatada', cidade = '$cidade', estado = '$estado' where id = ".$id;
    }

    $resultado = mysqli_query($conexao, $sql);

    if(!$resultado){
        echo '[{"erro":"Falha ao inserir/alterar cliente"}]';
    }

?>
