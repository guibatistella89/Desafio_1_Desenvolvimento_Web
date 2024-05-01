function exibirConfirmacao() {
    alert("Cadastro realizado com sucesso!");
}

function enviarFormulario(evento) {
    evento.preventDefault(); 

    const placa = document.getElementById("placa").value.toString();
    const nomeProprietario = document.getElementById("nomeProprietario").value.toString();
    const numeroApartamento = document.getElementById("numeroApartamento").value.toString();
    const blocoApartamento = document.getElementById("blocoApartamento").value.toString();
    const modeloVeiculo = document.getElementById("modeloVeiculo").value.toString();
    const corVeiculo = document.getElementById("corVeiculo").value.toString();
    const numeroVagaEstacionamento = document.getElementById("numeroVagaEstacionamento").value.toString();

    console.log("Placa do Veículo:", placa);
    console.log("Nome do Proprietário:", nomeProprietario);
    console.log("Número do Apartamento:", numeroApartamento);
    console.log("Bloco do Apartamento:", blocoApartamento);
    console.log("Modelo do Veículo:", modeloVeiculo);
    console.log("Cor do Veículo:", corVeiculo);
    console.log("Número da Vaga de Estacionamento:", numeroVagaEstacionamento);

    exibirConfirmacao();
}

document.getElementById("formularioReserva").addEventListener("submit", enviarFormulario);
