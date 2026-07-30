document.addEventListener("DOMContentLoaded", () => {
    // 1. Lê o valor atual do localStorage
    let total = localStorage.getItem("totalAvaliacoes");

    // 2. Se não existir, começa em 0. Se existir, transforma em número.
    if (total === null) {
        total = 0;
    } else {
        total = parseInt(total, 10);
    }

    // 3. Soma 1 (referente ao envio atual)
    total += 1;

    // 4. Salva o novo valor atualizado no localStorage
    localStorage.setItem("totalAvaliacoes", total);

    // 5. INJETA O NÚMERO NA TELA: Busca o ID do HTML e troca o "0" pelo valor real
    const elementoContador = document.getElementById("contador-exibicao");
    if (elementoContador) {
        elementoContador.textContent = total;
    }
});