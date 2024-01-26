document.addEventListener('DOMContentLoaded', function () {
    // Carregar dados do medicamento para edição
    carregarDadosMedicamento();

    // Adicionar evento de clique ao botão de atualização
    const btnAtualizar = document.getElementById('btnAtualizar');
    btnAtualizar.addEventListener('click', function () {
        // Atualizar medicamento
        atualizarMedicamento();

        // Redirecionar para infoMed após a atualização
        window.location.href = 'infoMed.html?nome=' + encodeURIComponent(document.getElementById('nome').value);
    });
});

// Função para carregar dados do medicamento para edição
function carregarDadosMedicamento() {
    // Obter o nome do medicamento da URL
    const nomeMedicamento = obterParametroURL('nome');

    // Recuperar os dados do medicamento do local storage
    const medicamento = obterDadosMedicamento(nomeMedicamento);

    // Preencher os campos com os dados do medicamento
    document.getElementById('nome').value = medicamento.nome || '';
    document.getElementById('formFarmaceutica').value = medicamento.formFarmaceutica || '';
    document.getElementById('frequencia').value = medicamento.frequencia || '';
    document.getElementById('instrucoes').value = medicamento.instrucoes || '';
    document.getElementById('dosagem').value = medicamento.dosagem || '';
    document.getElementById('contatoMedico').value = medicamento.contatoMedico || '';
}

// Função para atualizar os dados do medicamento
function atualizarMedicamento() {
    // Obter os valores dos campos
    const nome = document.getElementById('nome').value;
    const formFarmaceutica = document.getElementById('formFarmaceutica').value;
    const frequencia = document.getElementById('frequencia').value;
    const instrucoes = document.getElementById('instrucoes').value;
    const contatoMedico = document.getElementById('contatoMedico').value;

    // Atualizar os dados do medicamento no local storage
    const listaMedicamentos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const medicamentoIndex = listaMedicamentos.findIndex(med => med.nome === nome);

    if (medicamentoIndex !== -1) {
        listaMedicamentos[medicamentoIndex] = {
            nome,
            formFarmaceutica,
            frequencia,
            instrucoes,
            dosagem,
            contatoMedico
        };

        localStorage.setItem('medicamentos', JSON.stringify(listaMedicamentos));
    }
}

// Função para obter parâmetros da URL
function obterParametroURL(nomeParametro) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeParametro);
}

// Função para obter dados do medicamento do local storage
function obterDadosMedicamento(nomeMedicamento) {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    return medicamentosSalvos.find(med => med.nome === nomeMedicamento) || {};
}