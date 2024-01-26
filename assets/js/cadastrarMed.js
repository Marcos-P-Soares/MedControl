function cadastrarMedicamento() {
    // Obtenha os valores dos campos
    const nome = document.querySelector('[name="nome"]').value;
    const formFarmaceutica = document.querySelector('[name="formFarmaceutica"]').value;
    const frequencia = document.querySelector('[name="frequencia"]').value;
    const instrucoes = document.querySelector('[name="instrucoes"]').value;
    const dosagem = document.querySelector('[name="dosagem"]').value;
    const contatoMedico = document.querySelector('[name="contatoMedico"]').value;

    // Crie um objeto com os dados do medicamento
    const medicamento = {
      nome,
      formFarmaceutica,
      frequencia,
      instrucoes,
      dosagem,
      contatoMedico,
      quantidade: 0, // Inicializa a quantidade com 0
    };

    // Verificação se já existe algum dado no localStorage
    const medicamentosSalvos = JSON.parse(localStorage.getItem('medicamentos')) || [];

    // Adiciona o novo medicamento à lista
    medicamentosSalvos.push(medicamento);

    // Atualiza o localStorage
    localStorage.setItem('medicamentos', JSON.stringify(medicamentosSalvos));

    // Limpa os campos após o cadastro
    document.querySelector('[name="nome"]').value = '';
    document.querySelector('[name="formFarmaceutica"]').value = '';
    document.querySelector('[name="frequencia"]').value = '';
    document.querySelector('[name="instrucoes"]').value = '';
    document.querySelector('[name="dosagem"]').value = '';
    document.querySelector('[name="contatoMedico"]').value = '';

    // Mensagem de sucesso
    alert('Medicamento cadastrado com sucesso!');
  }