document.addEventListener('DOMContentLoaded', function () {
  // Obtém os medicamentos salvos do localStorage
  const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];

  // Obtém a tabela
  const tabelaBody = document.getElementById('tabela-body');

  // Verifica se há medicamentos na tabela
  if (medicamentosSalvos.length === 0) {
      tabelaBody.innerHTML = '<tr><td colspan="2">Não há medicamentos cadastrados</td></tr>';
  } else {
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
  }
});
