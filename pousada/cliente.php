<?php
    require_once('conexao.php');

    $id = $_POST['id']; 
	
	$nome = '';
    $documento = '';
    $dataNascimento = '';
    $cidade = '';
    $estado = '';
    $estados = array("AC","AL","AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO");
       
	$sql = "select * from clientes where id = ".$id;
	$resultado = mysqli_query($conexao, $sql);
	if($resultado){
        $dados = mysqli_fetch_array($resultado);
        $str_array[] = $dados;
		echo json_encode($str_array, JSON_PRETTY_PRINT);
	} else {
        echo '[{"erro":"<span class=\'erro\'>Erro de acesso ao banco de dados</span>"}]';
    }

    mysqli_close($conexao);

?>

