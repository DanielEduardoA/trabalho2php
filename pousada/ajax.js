function lerQuartos(){

	var itens = "";
	var url = "quartos.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		beforeSend: function(){
			$("p").html("Pesquisando quartos no servidor...");
		},
		error: function(){
			$("p").html("<span class='erro'>Não foi possível consultar os quartos no servidor!</span>");
		},
		success: function(retorno){
			if(retorno[0].erro){
				$("p").html(retorno[0].erro);
			}else{
				for(var i=0;i<retorno.length;i++){
					itens += "<tr>";
					itens += "<td>" + retorno[i].numero_porta + "</td>";
					itens += "<td>" + retorno[i].tipo_quarto + "</td>";
					itens += "<td>" + retorno[i].valor + "</td>";
					itens += "<td>" + retorno[i].status + "</td>";
					itens += "</tr>";
				}
				$("#resposta tbody").html(itens);
				$("p").html("<span class='sucesso'>Pesquisa concluída com sucesso.</span>");
			}
		}
	});
}

function lerReservas(){

	var itens = "";
	var url = "reservas.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		beforeSend: function(){
			$("p").html("Pesquisando reservas no servidor...");
		},
		error: function(){
			$("p").html("<span class='erro'>Não foi possível consultar as reservas no servidor!</span>");
		},
		success: function(retorno){
			if(retorno[0].erro){
				$("p").html(retorno[0].erro);
			}else{
				for(var i=0;i<retorno.length;i++){
					itens += "<tr>";
					itens += "<td>" + retorno[i].nome + "</td>";
					itens += "<td>" + retorno[i].numero_porta + "</td>";
					itens += "<td>" + retorno[i].data_entrada +"</td>";
					itens += "<td>" + retorno[i].data_saida +"</td>";
					itens += "<td>" + retorno[i].valor_reserva + "</td>";
					itens += "<td>" + retorno[i].status + "</td>";
					itens += "<td>" + retorno[i].data_hora +"</td>";
					itens += "</tr>";
				}
				$("#resposta tbody").html(itens);
				$("p").html("<span class='sucesso'>Pesquisa concluída com sucesso.</span>");
			}
		}
	});
}

function lerClientes(){

	var itens = "";
	var url = "clientes.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		beforeSend: function(){
			$("p").html("Pesquisando clientes no servidor...");
		},
		error: function(){
			$("p").html("<span class='erro'>Não foi possível consultar os clientes no servidor!</span>");
		},
		success: function(retorno){
			if(retorno[0].erro){
				$("p").html(retorno[0].erro);
			}else{
				for(var i=0;i<retorno.length;i++){
					itens += "<tr>";
					itens += "<td>" + retorno[i].nome + "</td>";
					itens += "<td>" + retorno[i].documento + "</td>";
					itens += "<td>" + retorno[i].data_nascimento+"</td>";
					itens += "<td>" + retorno[i].cidade + "</td>";
					itens += "<td>" + retorno[i].estado + "</td>";
					itens += "<td>" + "<input type=\"button\" class=\"alterar\" data-id="+retorno[i].id+" value=\"Alterar\"\>";
					itens += "</tr>";
				}
				$("#resposta tbody").html(itens);
				$("p").html("<span class='sucesso'>Pesquisa concluída com sucesso.</span>");
			}
		}
	});
}

$(document).on("click", ".alterar", function() { 
	var id=$(this).attr("data-id");
	alterarCliente(id);
});

function alterarCliente(id) {
	 $.ajax({type: "POST",
		url: "cliente.php",
		data: { id: id },
		success:function(result){
		  console.log("Id enviado com sucesso.");	
		},
		error:function(result){
			console.log("Não foi possivel enviar o id.");
		}
	});
}

function lerCliente(){

	var itens = "";
	var url = "cliente.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		beforeSend: function(){
			$("p").html("Pesquisando cliente no servidor...");
		},
		error: function(){
			$("p").html("<span class='erro'>Não foi possível consultar o cliente no servidor!</span>");
		},
		success: function(retorno){
			if(retorno[0].erro){
				$("p").html(retorno[0].erro);
			}else{
				for(var i=0;i<retorno.length;i++){
					
				}
				
			}
		}
	});
}


