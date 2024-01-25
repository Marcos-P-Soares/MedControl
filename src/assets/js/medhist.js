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
      const row = `
        <tr>
          <td>${medicamentoSelecionado.nome}</td>
          <td>
            <select>
              <option value="tomado">Tomado</option>
              <option value="nao-tomado">Não Tomado</option>
            </select>
          </td>
          <td>
          <button onclick="mostrarInformacoes('${medicamentoSelecionado.nome}')">Informações</button>
          </td>
        </tr>
      `;
      tabelaBody.innerHTML += row;
    }
  }

// Função para mostrar informações do medicamento
function mostrarInformacoes(nomeMedicamento) {
    // Encontrar o medicamento no localStorage
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const medicamentoSelecionado = medicamentosSalvos.find(med => med.nome === nomeMedicamento);

    // Redirecionar para a página de informações
    window.location.href = `infoMed.html?nome=${encodeURIComponent(medicamentoSelecionado.nome)}`;
}

// Adicione esta função para obter os parâmetros da URL
function getURLParameters() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return Object.fromEntries(urlParams.entries());
}

// Função para carregar dados do medicamento na página infoMed.html
function carregarDadosMedicamento() {
    const parametrosURL = getURLParameters();
    const nomeMedicamento = parametrosURL.nome;

    // Encontrar o medicamento no localStorage
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const medicamentoSelecionado = medicamentosSalvos.find(med => med.nome === nomeMedicamento);

    // Atualizar os elementos HTML com os dados do medicamento
    document.getElementById('nomeMedicamento').innerText = medicamentoSelecionado.nome || 'Nome não disponível';
    document.getElementById('dosagem').innerText = `Dosagem: ${medicamentoSelecionado.dosagem || 'Não especificada'}`;
    document.getElementById('instrucoes').innerText = `Instruções Especiais: ${medicamentoSelecionado.instrucoes || 'Não especificadas'}`;
    document.getElementById('situacao').innerText = `Situação: ${medicamentoSelecionado.situacao || 'Não especificada'}`;
    document.getElementById('contatoMedico').innerText = `Contato do Médico: ${medicamentoSelecionado.contatoMedico || 'Não especificado'}`;
}

// Chamar a função para carregar dados quando a página for carregada
document.addEventListener('DOMContentLoaded', carregarDadosMedicamento);