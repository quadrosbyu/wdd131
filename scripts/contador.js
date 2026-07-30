// Aguarda o carregamento completo da página de sucesso (avaliacao.html)
document.addEventListener("DOMContentLoaded", () => {
    // 1. Recupera o valor atual do localStorage através da chave 'totalAvaliacoes'
    let totalAvaliacoes = localStorage.getItem("totalAvaliacoes");

    // 2. Se a chave não existir (primeiro acesso do usuário), define o valor como 0
    if (totalAvaliacoes === null) {
        totalAvaliacoes = 0;
    } else {
        // Converte o valor recuperado (que vem como texto) para número inteiro
        totalAvaliacoes = parseInt(totalAvaliacoes, 10);
    }

    // 3. Incrementa mais um ao contador por causa do novo formulário enviado com sucesso
    totalAvaliacoes += 1;

    // 4. Grava o novo valor numérico atualizado de volta no localStorage
    localStorage.setItem("totalAvaliacoes", totalAvaliacoes);

    // 5. Procura o elemento HTML com ID 'contador-exibicao' para mostrar o valor na tela
    const elementoContador = document.getElementById("contador-exibicao");
    if (elementoContador) {
        elementoContador.textContent = totalAvaliacoes;
    }
});