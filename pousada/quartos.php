
<?php 

require_once("conexao.php");

$sql = "select * from quartos";
$resultado = mysqli_query($conexao, $sql);

if($resultado){

	$registros = mysqli_num_rows($resultado);
	if($registros<1){
		echo '[{"erro":"<span class=\'erro\'>Não há dados disponível para consulta</span>"}]';
	}else{

		while($dados = mysqli_fetch_array($resultado)){
			$str_array[] = $dados;
		}

		echo json_encode($str_array, JSON_PRETTY_PRINT);
	}
}else{
	echo '[{"erro":"<span class=\'erro\'>Erro de acesso ao banco de dados</span>"}]';
}
	

mysqli_close($conexao);

?>