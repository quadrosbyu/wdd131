const produtos = [
  { id: "fc-1888", nome: "capacitor de fluxo", classificacaomedia: 4.5 },
  { id: "fc-2050", nome: "fios elétricos", classificacaomedia: 4.7 },
  { id: "fs-1987", nome: "circuitos de tempo", classificacaomedia: 3.5 },
  { id: "ac-2000", nome: "reator de baixa tensão", classificacaomedia: 3.9 },
  { id: "jj-1969", nome: "equalizador de distorção", classificacaomedia: 5.0 }
];

// O código abaixo aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    const selectProduto = document.getElementById("produto");

    // Verifica se encontrou o elemento select para evitar erros no console
    if (selectProduto) {
        produtos.forEach(produto => {
            const option = document.createElement("option");
            option.value = produto.id;
            option.textContent = produto.nome;
            selectProduto.appendChild(option);
        });
        console.log("Produtos carregados com sucesso!");
    } else {
        console.error("Elemento select com ID 'produto' não foi encontrado.");
    }
});
 // --- DATAS DO RODAPÉ ---
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;