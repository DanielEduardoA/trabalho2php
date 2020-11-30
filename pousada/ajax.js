function preencherTabelaClientes() {
	var itens = "";
	var url = "clientes.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		error: function () {
			$("#erro").html("Não foi possível consultar os clientes no servidor!");
		},
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				itens += "<tr>";
				itens += "<td>" + retorno[i].nome + "</td>";
				itens += "<td>" + retorno[i].documento + "</td>";
				itens += "<td>" + retorno[i].data_nascimento + "</td>";
				itens += "<td>" + retorno[i].cidade + "</td>";
				itens += "<td>" + retorno[i].estado + "</td>";
				itens += "<td>" + "<input type=\"button\" class=\"alterarCliente\" data-id=" + retorno[i].id + " value=\"Alterar\"\>";
				itens += "</tr>";
			}
			$("#resposta tbody").html(itens);
		}
	});
}

$(document).on("click", ".adicionarClientes", function () {
	$("#adicionarClienteModal").find("input,textarea,select").val('');
	$("#adicionarClienteModal").modal('show');
});

$(document).on("click", ".alterarCliente", function () {
	var id = $(this).attr("data-id");
	$.ajax({
		type: "POST",
		url: "cliente.php",
		data: { id: id },
		dataType: "json",
		success: function (retorno) {
			if (retorno[0].erro) {
				$("#erro").html("Não foi possível consultar os dados do cliente no servidor");
			} else {
				$("#nome_u").val(retorno[0].nome);
				$("#documento_u").val(retorno[0].documento);
				var data_nascimento = moment(retorno[0].data_nascimento, "YYYY-MM-DD");
				$("#dataNascimento_u").val(data_nascimento.format("DD/MM/YYYY"));
				$("#cidade_u").val(retorno[0].cidade);
				$("#estado_u").val(retorno[0].estado);
				$("#nome_u").val(retorno[0].nome);
				$("#id_u").val(retorno[0].id);
				$("#alterarClienteModal").modal('show');
			}
		},
		error: function (retorno) {
			$("#erro").html("Não foi possível consultar os dados do cliente no servidor");
		}
	});
});

function lerClientesInserirReserva() {
	var itens = "<option value=\"\">Selecione</option>";
	$.ajax({
		type: "POST",
		url: "clientes.php",
		dataType: "json",
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				itens += '<option value="' + retorno[i].id + '">' + retorno[i].nome + '</option>';
			}
			$('#cliente').html(itens).show();
		},
		error: function (y) {
			$("#erro_inserir").html("Não foi possivel consultar os clientes cadastrados");
		}
	});
}

function lerQuartosInserirReserva() {
	var itens = "<option value=\"\">Selecione</option>";
	$.ajax({
		type: "POST",
		url: "quartos.php",
		dataType: "json",
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				itens += '<option value="' + retorno[i].id + '">' + retorno[i].numero_porta + '</option>';
			}
			$('#quarto').html(itens).show();
		},
		error: function (y) {
			$("#erro_inserir").html("Não foi possivel consultar os quartos cadastrados");
		}
	});
}

function lerClientesAlterarReserva() {
	var itens = "<option value=\"\">Selecione</option>";
	$.ajax({
		type: "POST",
		url: "clientes.php",
		dataType: "json",
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				itens += '<option value="' + retorno[i].id + '">' + retorno[i].nome + '</option>';
			}
			$('#cliente_u').html(itens).show();
		},
		error: function (y) {
			$("#erro_alterar").html("Não foi possivel consultar os clientes cadastrados");
		}
	});
}

function lerQuartosAlterarReserva() {
	var itens = "<option value=\"\">Selecione</option>";
	$.ajax({
		type: "POST",
		url: "quartos.php",
		dataType: "json",
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				itens += '<option value="' + retorno[i].id + '">' + retorno[i].numero_porta + '</option>';
			}
			$('#quarto_u').html(itens).show();
		},
		error: function (y) {
			$("#erro_alterar").html("Não foi possivel consultar os quartos cadastrados");
		}
	});
}

function preencherTabelaReservas() {
	var itens = "";
	var url = "reservas.php";

	$.ajax({
		url: url,
		cache: false,
		dataType: "json",
		error: function () {
			$("#erro").html("Não foi possível consultar as reservas no servidor!");
		},
		success: function (retorno) {
			for (var i = 0; i < retorno.length; i++) {
				var valor_formatado = retorno[i].valor_reserva.replace('.', ',');
				itens += "<tr>";
				itens += "<td>" + retorno[i].nome + "</td>";
				itens += "<td>" + retorno[i].numero_porta + "</td>";
				itens += "<td>" + retorno[i].data_entrada + "</td>";
				itens += "<td>" + retorno[i].data_saida + "</td>";
				itens += "<td>" + valor_formatado + "</td>";
				itens += "<td>" + retorno[i].status + "</td>";
				itens += "<td>" + retorno[i].data_hora + "</td>";
				itens += "<td>" + "<input type=\"button\" class=\"alterarReserva\" data-id=" + retorno[i].id + " value=\"Alterar\"\>";
				itens += "</tr>";
			}
			$("#resposta tbody").html(itens);
		}
	});
}

$(document).on("click", ".adicionarReservas", function () {
	$("#adicionarReservaModal").find("input,textarea,select").val('');
	lerClientesInserirReserva();
	lerQuartosInserirReserva();
	$("#adicionarReservaModal").modal('show');
});

$(document).on("click", ".alterarReserva", function () {
	var id = $(this).attr("data-id");
	lerClientesAlterarReserva();
	lerQuartosAlterarReserva();
	$.ajax({
		type: "POST",
		url: "reserva.php",
		data: { id: id },
		dataType: "json",
		success: function (retorno) {
			if (retorno[0].erro) {
				$("#erro").html("Não foi possível consultar os dados da reserva no servidor");
			} else {
				$("#cliente_u").val(retorno[0].id_cliente);
				$("#quarto_u").val(retorno[0].id_quarto);

				var data_entrada = moment(retorno[0].data_entrada, "YYYY-MM-DD");
				$("#dataEntrada_u").val(data_entrada.format("DD/MM/YYYY"));

				var data_saida = moment(retorno[0].data_saida, "YYYY-MM-DD");
				$("#dataSaida_u").val(data_saida.format("DD/MM/YYYY"));

				var data_hora = moment(retorno[0].data_hora, "YYYY-MM-DD HH:mm");
				$("#dataHora_u").val(data_hora.format("DD/MM/YYYY HH:mm"));

				var valor_formatado = retorno[0].valor_reserva.replace('.', ',');
				$("#valor_u").val(valor_formatado);

				$("#status_u").val(retorno[0].status);
				$("#id_u").val(retorno[0].id);

				$("#alterarReservaModal").modal('show');
			}
		},
		error: function (retorno) {
			$("#erro").html("Não foi possível consultar os dados da reserva no servidor");
		}
	});
});


$(document).ready(function () {
	$("#form_adicionar_cliente").submit(function (e) {
		var data = $("#form_adicionar_cliente").serialize();
		if (!validaData($("#dataNascimento").val())) {
			$.ajax({
				data: data,
				type: "POST",
				url: "salvarCliente.php",
				success: function (retorno) {
					if (retorno == "") {
						$('#adicionarClienteModal').modal('hide');
						alert('Cliente adicionado com sucesso!');
						location.reload();
					} else {
						$("#erro_inserir").html("Falha ao inserir/alterar o cliente");
					}
				}
			});
		}
	});

	$("#form_alterar_cliente").submit(function (e) {
		var data = $("#form_alterar_cliente").serialize();
		if (!validaData($("#dataNascimento_u").val())) {
			$.ajax({
				data: data,
				type: "POST",
				url: "salvarCliente.php",
				success: function (retorno) {
					if (retorno == "") {
						$('#alterarClienteModal').modal('hide');
						alert('Cliente alterado com sucesso!');
					} else {
						$("#erro_inserir").html("Falha ao inserir/alterar o cliente");
					}
				}
			});
		}
	});

	$("#form_adicionar_reserva").submit(function (e) {
		var data = $("#form_adicionar_reserva").serialize();
		if (!validaData($("#dataEntrada").val()) && !validaData($("#dataSaida").val()) && !validaDataHora($("#dataHora").val())) {
			$.ajax({
				data: data,
				type: "POST",
				url: "salvarReserva.php",
				success: function (retorno) {
					if (retorno == "") {
						$('#adicionarReservaModal').modal('hide');
						alert('Reserva adicionado com sucesso!');
						location.reload();
					} else {
						$("#erro_inserir").html("Falha ao inserir/alterar a reserva");
					}
				}
			});
		}
	});

	$("#form_alterar_reserva").submit(function (e) {
		var data = $("#form_alterar_reserva").serialize();
		if (!validaData($("#dataEntrada_u").val()) && !validaData($("#dataSaida_u").val()) && !validaDataHora($("#dataHora_u").val())) {
			$.ajax({
				data: data,
				type: "POST",
				url: "salvarReserva.php",
				success: function (retorno) {
					if (retorno == "") {
						$('#alterarReservaModal').modal('hide');
						alert('Reserva alterado com sucesso!');
						location.reload();
					} else {
						$("#erro_inserir").html("Falha ao inserir/alterar a reserva");
					}
				}
			});
		}
	});
});

