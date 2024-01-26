document.addEventListener('DOMContentLoaded', function () {
    const btnCadastrar = document.getElementById('Cadastrar');
    btnCadastrar.addEventListener('click', function () {
        window.location.href = 'cadastrarMed.html';
    });

    const btnGerenciamento = document.getElementById('Gerenciamento');
    btnGerenciamento.addEventListener('click', function () {
        window.location.href = 'gerenciarEstoque.html';
    });

    const btnHistorico = document.getElementById('Historico');
    btnHistorico.addEventListener('click', function () {
        window.location.href = 'medHist.html';
    });
});
