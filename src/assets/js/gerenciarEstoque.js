document.addEventListener('DOMContentLoaded', function () {
    // Obtém os medicamentos salvos do localStorage
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Obtém a tabela
    const tabelaBody = document.getElementById('tabela-body');

    // Preenche a tabela com os medicamentos salvos
    medicamentosSalvos.forEach((medicamento) => {
      const row = `
        <tr>
          <td>${medicamento.nome}</td>
          <td>${medicamento.quantidade}</td>
        </tr>
      `;
      tabelaBody.innerHTML += row;
    });
  });