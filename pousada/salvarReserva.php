<?php

    require_once('conexao.php');

	$id = $_POST['id'];
	$cliente = $_POST['cliente'];
	$quarto = $_POST['quarto'];

	$dataEntrada = str_replace('/', '-', $_POST['dataEntrada']);
	$dataSaida = str_replace('/', '-', $_POST['dataSaida']);

	$dataEntradaTime = strtotime($dataEntrada);
	$dataSaidaTime = strtotime($dataSaida);

	$dataEntradaFormatada= date('Y-m-d', $dataEntradaTime);
	$dataSaidaFormatada= date('Y-m-d', $dataSaidaTime);

	if($dataEntradaTime > $dataSaidaTime ){
        echo '[{"erro":"Data entrada deve ser menor ou igual a data de saída"}]';
	} else {
		$valorReserva = $_POST['valorReserva'];
		$status = $_POST['status'];

		$dataHora = str_replace('/', '-', $_POST['dataHora']);
		$dataHoraFormatada= date('Y-m-d H:i',strtotime($dataHora));

		$valorFomatado = str_replace('.', '', $valorReserva);
        $valorFomatado = str_replace(',', '.', $valorFomatado);
        
		
		if($id == ""){
			$sql = "insert into reservas (id_quarto, id_cliente, data_entrada, data_saida, valor_reserva, status, data_hora) values ('$quarto', '$cliente', '$dataEntradaFormatada', '$dataSaidaFormatada', '$valorFomatado', '$status', '$dataHoraFormatada')";
		}else{
			$sql = "update reservas set id_quarto = '$quarto', id_cliente = '$cliente', data_entrada = '$dataEntradaFormatada', data_saida = '$dataSaidaFormatada', valor_reserva = '$valorFomatado', data_hora = '$dataHoraFormatada', status = '$status' where id = ".$id;
		}
		
        $resultado = mysqli_query($conexao, $sql);

        if(!$resultado){
            echo '[{"erro":"Falha ao inserir/alterar reserva"}]';
        }
    }

?>
