<?php

	require_once('conexao.php');

	$sql = "SELECT date_format(r.`data_entrada`, '%d-%m-%Y') as data_entrada, date_format(r.`data_saida`, '%d-%m-%Y') as data_saida, date_format(r.`data_hora`, '%d-%m-%Y %H:%i') as data_hora, r.id, r.status, r.valor_reserva, q.numero_porta, c.nome from reservas r inner join clientes c inner join quartos q on id_quarto = q.id and r.id_cliente = c.id";
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