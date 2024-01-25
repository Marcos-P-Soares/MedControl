document.addEventListener('DOMContentLoaded', function () {
        // Obter parâmetros da URL
        const urlParams = new URLSearchParams(window.location.search);
        const nomeMedicamento = urlParams.get('medicamento');

        // TODO: Obter os dados do medicamento com base no nome

        // Exibir os dados na página
        // Substitua as linhas abaixo pelos dados reais do medicamento
        const container = document.querySelector('.container.titulo');
        container.innerHTML = `
            <p class="h1">Informações do Medicamento</p>
            <p>Nome: ${nomeMedicamento}</p>
            <p>Dosagem: ...</p>
            <p>Instruções Especiais: ...</p>
            <p>Situação: ...</p>
            <p>Contato do Médico: ...</p>
        `;
    });