document.addEventListener('DOMContentLoaded', function () {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const tabelaBody = document.getElementById('tabela-body');
  
    if (medicamentosSalvos.length === 0) {
      tabelaBody.innerHTML = '<tr><td colspan="2">Não há medicamentos cadastrados</td></tr>';
    } else {
        medicamentosSalvos.forEach((medicamento, index) => {
            const row = `
                <tr>
                    <td>${medicamento.nome}</td>
                    <td class="cell-with-button">
                        <span>${medicamento.quantidade}</span>
                        <button class="editar-btn" onclick="editarQuantidade(${index})">Editar</button>
                    </td>
                </tr>
            `;
            tabelaBody.innerHTML += row;
      });
    }
  });
  
  function editarQuantidade(index) {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
  
    const novaQuantidade = prompt('Digite a nova quantidade:');
  
    if (novaQuantidade === null || novaQuantidade.trim() === '') {
      return;
    }
  
    const novaQuantidadeInt = parseInt(novaQuantidade, 10);
  
    if (!isNaN(novaQuantidadeInt)) {
      medicamentosSalvos[index].quantidade = novaQuantidadeInt;
      localStorage.setItem('medicamentos', JSON.stringify(medicamentosSalvos));
  
      atualizarTabelaEstoque();
    } else {
      alert('Digite um valor válido para a quantidade.');
    }
  }
  
  function atualizarTabelaEstoque() {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
    const tabelaBody = document.getElementById('tabela-body');
    tabelaBody.innerHTML = '';
  
    if (medicamentosSalvos.length === 0) {
      tabelaBody.innerHTML = '<tr><td colspan="2">Não há medicamentos cadastrados</td></tr>';
    } else {
        medicamentosSalvos.forEach((medicamento, index) => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
            const span = document.createElement('span');
            const button = document.createElement('button');

            cell1.textContent = medicamento.nome;
            span.textContent = medicamento.quantidade;
            button.textContent = 'Editar';

            cell2.classList.add('cell-with-button');
            button.classList.add('editar-btn');

            button.addEventListener('click', function () {
                editarQuantidade(index);
            });

            cell2.appendChild(span);
            cell2.appendChild(button);
            row.appendChild(cell1);
            row.appendChild(cell2);

            tabelaBody.appendChild(row);
        });
    }
  }  