<?php 

	require_once("conexao.php");

	$sql = "select id, nome, date_format(`data_nascimento`, '%d-%m-%Y') as data_nascimento, documento, cidade, estado from clientes";
	$resultado = mysqli_query($conexao, $sql);

	if($resultado){
		$registros = mysqli_num_rows($resultado);
		if($registros>=1){
			while($dados = mysqli_fetch_array($resultado)){
				$str_array[] = $dados;
			}
			echo json_encode($str_array, JSON_PRETTY_PRINT);
		}else{
			$str_array[] = array();
			echo json_encode($str_array, JSON_FORCE_OBJECT);
		}
	}else{
		echo '[{"erro":"Erro de acesso ao banco de dados"}]';
	}
		

	mysqli_close($conexao);

?>