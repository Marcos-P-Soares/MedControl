document.addEventListener('DOMContentLoaded', function () {
  const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];
  const tabelaBody = document.getElementById('tabela-body');

  if (medicamentosSalvos.length === 0) {
    tabelaBody.innerHTML = '<tr><td colspan="3">Não há medicamentos cadastrados</td></tr>';
  } else {
      medicamentosSalvos.forEach((medicamento, index) => {
          const row = document.createElement('tr');
          const cell1 = document.createElement('td');
          const cell2 = document.createElement('td');
          const cell3 = document.createElement('td');
          const span = document.createElement('span');
          const editarBtn = document.createElement('button');
          const excluirBtn = document.createElement('button');

          cell1.textContent = medicamento.nome;
          span.textContent = medicamento.quantidade;
          editarBtn.textContent = 'Editar';
          excluirBtn.textContent = 'Excluir';

          cell2.classList.add('cell-with-button');
          editarBtn.classList.add('editar-btn');
          excluirBtn.classList.add('excluir-btn');

          editarBtn.addEventListener('click', function () {
              editarQuantidade(index);
          });

          excluirBtn.addEventListener('click', function () {
              excluirMedicamento(index);
          });

          cell2.appendChild(span);
          cell2.appendChild(editarBtn);
          cell3.appendChild(excluirBtn);
          row.appendChild(cell1);
          row.appendChild(cell2);
          row.appendChild(cell3);

          tabelaBody.appendChild(row);
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

  function excluirMedicamento(index) {
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    const confirmacao = confirm('Tem certeza que deseja excluir este medicamento?');

    if (confirmacao) {
        medicamentosSalvos.splice(index, 1);
        localStorage.setItem('medicamentos', JSON.stringify(medicamentosSalvos));

        atualizarTabelaEstoque();
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
          const cell3 = document.createElement('td');
          const span = document.createElement('span');
          const editarBtn = document.createElement('button');
          const excluirBtn = document.createElement('button');

          cell1.textContent = medicamento.nome;
          span.textContent = medicamento.quantidade;
          editarBtn.textContent = 'Editar';
          excluirBtn.textContent = 'Excluir';

          cell2.classList.add('cell-with-button');
          editarBtn.classList.add('editar-btn');
          excluirBtn.classList.add('excluir-btn');

          editarBtn.addEventListener('click', function () {
              editarQuantidade(index);
          });

          excluirBtn.addEventListener('click', function () {
              excluirMedicamento(index);
          });

          cell2.appendChild(span);
          cell2.appendChild(editarBtn);
          cell3.appendChild(excluirBtn);
          row.appendChild(cell1);
          row.appendChild(cell2);
          row.appendChild(cell3);

          tabelaBody.appendChild(row);
        });
    }
  }  