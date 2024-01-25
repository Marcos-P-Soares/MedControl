// Função para adicionar medicamento à tabela
function adicionarMedicamento() {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Mostrar lista de medicamentos disponíveis para seleção
    const selecionado = prompt('Selecione o medicamento:\n' + medicamentosSalvos.join('\n'));

    // Se o usuário escolheu um medicamento
    if (selecionado) {
        // Criar o objeto de medicamento com base no selecionado
        const medicamentoSelecionado = medicamentosSalvos.find(med => med.nome === selecionado);

        // Adicionar o medicamento à tabela
        const tabelaBody = document.getElementById('medicamentosBody');

        // Criar a caixa de seleção e configurar o evento onchange
        const situacaoSelect = document.createElement('select');
        situacaoSelect.classList.add('situacaoSelect');
        situacaoSelect.innerHTML = `
            <option value="tomado">Tomado</option>
            <option value="nao-tomado">Não Tomado</option>
        `;
        situacaoSelect.addEventListener('change', function () {
            atualizarSituacao(medicamentoSelecionado.nome, this.value);
        });

        // Adicionar o medicamento à tabela
        const row = `
            <tr>
                <td>${medicamentoSelecionado.nome}</td>
                <td></td>
                <td>
                    <button onclick="mostrarInformacoes('${medicamentoSelecionado.nome}')">Informações</button>
                </td>
            </tr>
        `;
        tabelaBody.innerHTML += row;

        // Adicionar a caixa de seleção à célula correspondente
        const situacaoCell = tabelaBody.lastElementChild.querySelector('td:nth-child(2)');
        situacaoCell.appendChild(situacaoSelect);

        // Adicionar o medicamento à lista no local storage
        atualizarSituacao(medicamentoSelecionado.nome, situacaoSelect.value);
        const listaMedicamentos = JSON.parse(localStorage.getItem('medicamentosHist')) || [];
        listaMedicamentos.push(medicamentoSelecionado);
        localStorage.setItem('medicamentosHist', JSON.stringify(listaMedicamentos));
    }

    // Exibir medicamentos salvos ao recarregar a página
    exibirMedicamentosSalvos();
}

// Função para exibir medicamentos salvos ao recarregar a página
function exibirMedicamentosSalvos() {
    const tabelaBody = document.getElementById('medicamentosBody');
    tabelaBody.innerHTML = ''; // Limpar a tabela antes de exibir os medicamentos

    const listaMedicamentos = JSON.parse(localStorage.getItem('medicamentosHist')) || [];

    listaMedicamentos.forEach(medicamento => {
        const situacaoSelect = document.createElement('select');
        situacaoSelect.classList.add('situacaoSelect');
        situacaoSelect.innerHTML = `
            <option value="tomado" ${medicamento.situacao === 'tomado' ? 'selected' : ''}>Tomado</option>
            <option value="nao-tomado" ${medicamento.situacao === 'nao-tomado' ? 'selected' : ''}>Não Tomado</option>
        `;
        situacaoSelect.addEventListener('change', function () {
            atualizarSituacao(medicamento.nome, this.value);
        });

        const row = `
            <tr>
                <td>${medicamento.nome}</td>
                <td></td>
                <td>
                    <button onclick="mostrarInformacoes('${medicamento.nome}')">Informações</button>
                </td>
            </tr>
        `;
        tabelaBody.innerHTML += row;

        const situacaoCell = tabelaBody.lastElementChild.querySelector('td:nth-child(2)');
        situacaoCell.appendChild(situacaoSelect);
        atualizarSituacao(medicamento.nome, situacaoSelect.value);
    });
}

// Função para atualizar a situação do medicamento no local storage
function atualizarSituacao(nomeMedicamento, novaSituacao) {
    const listaMedicamentos = JSON.parse(localStorage.getItem('medicamentosHist')) || [];
    const medicamentoIndex = listaMedicamentos.findIndex(med => med.nome === nomeMedicamento);

    if (medicamentoIndex !== -1) {
        listaMedicamentos[medicamentoIndex].situacao = novaSituacao;
        localStorage.setItem('medicamentosHist', JSON.stringify(listaMedicamentos));
    }
}

// Chamar a função para exibir medicamentos ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    exibirMedicamentosSalvos();
});

// Função para mostrar informações do medicamento
function mostrarInformacoes(nomeMedicamento) {
    // Construa a URL com parâmetros
    const url = `infoMed.html?nome=${encodeURIComponent(nomeMedicamento)}`;
    // Redirecione para infoMed.html
    window.location.href = url;
}
