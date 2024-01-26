document.addEventListener('DOMContentLoaded', function () {
    // Função para obter parâmetros da URL
    function obterParametroURL(nomeParametro) {
        const urlSearchParams = new URLSearchParams(window.location.search);
        return urlSearchParams.get(nomeParametro);
    }

    // Obtenha o nome do medicamento da URL
    const nomeMedicamento = obterParametroURL('nome');

    // Recupere os dados do medicamento do local storage
    const medicamento = obterDadosMedicamento(nomeMedicamento);

    // Preencha os campos com os dados do medicamento
    document.getElementById('nomeMedicamento').textContent = medicamento.nome || 'N/A';
    document.getElementById('dosagem').textContent = medicamento.dosagem || 'N/A';
    document.getElementById('instrucoes').textContent = medicamento.instrucoes || 'N/A';
    document.getElementById('contatoMedico').textContent = medicamento.contatoMedico || 'N/A';

    // Adicione evento de clique ao botão "Editar Medicamento"
    const btnEditarMedicamento = document.getElementById('btnEditarMedicamento');
    btnEditarMedicamento.addEventListener('click', function () {
        window.location.href = 'editarMed.html?nome=' + encodeURIComponent(nomeMedicamento);
    });
});

// Função para obter dados do medicamento do local storage
function obterDadosMedicamento(nomeMedicamento) {
    const listaMedicamentos = JSON.parse(localStorage.getItem('medicamentosHist')) || [];
    return listaMedicamentos.find(med => med.nome === nomeMedicamento) || {};
}

// Função para obter a situação do medicamento
function obterSituacaoMedicamento() {
    // Obter o elemento select
    const selectSituacao = document.getElementById('situacaoMedicamento');

    // Obter a opção selecionada
    const opcaoSelecionada = selectSituacao.options[selectSituacao.selectedIndex];

    // Retornar o valor da opção selecionada (pode ser 'tomado' ou 'nao-tomado')
    return opcaoSelecionada ? opcaoSelecionada.value : null;
}

// Função para obter dados do medicamento do local storage
function obterDadosMedicamento(nomeMedicamento) {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    return medicamentosSalvos.find(med => med.nome === nomeMedicamento) || {};
}