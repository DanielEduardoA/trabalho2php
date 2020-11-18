<?php 

require_once("conexao.php");

$sql = "select id, nome, date_format(`data_nascimento`, '%d-%m-%Y') as data_nascimento, documento, cidade, estado from clientes";
	$resultado = mysqli_query($conexao, $sql);

if($resultado){

	$registros = mysqli_num_rows($resultado);
	if($registros<1){
		echo '[{"erro":"<span class=\'erro\'>Não há dados disponível para consulta</span>"}]';
	}else{

		while($dados = mysqli_fetch_array($resultado)){
			$str_array[] = $dados;
		}

		// Tranforma o array $dados em JSON
		echo json_encode($str_array, JSON_PRETTY_PRINT);
	}
}else{
	echo '[{"erro":"<span class=\'erro\'>Erro de acesso ao banco de dados</span>"}]';
}
	

mysqli_close($conexao);

?>