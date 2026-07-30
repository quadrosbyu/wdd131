// Array de Produtos fornecido pela atividade
const produtos = [
  {
    id: "fc-1888",
    nome: "capacitor de fluxo",
    classificacaomedia: 4.5
  },
  {
    id: "fc-2050",
    nome: "fios elétricos",
    classificacaomedia: 4.7
  },
  {
    id: "fs-1987",
    nome: "circuitos de tempo",
    classificacaomedia: 3.5
  },
  {
    id: "ac-2000",
    nome: "reator de baixa tensão",
  }
];

// Executa o código assim que o DOM estiver totalmente carregado
document.addEventListener("DOMContentLoaded", () => {
    // 1. Seleciona o elemento <select> pelo ID
    const selectProduto = document.getElementById("produto");

    // 2. Itera sobre o array de produtos
    produtos.forEach(produto => {
        // 3. Cria um novo elemento <option>
        const option = document.createElement("option");
        
        // 4. Define o atributo 'value' com o ID do produto
        option.value = produto.id;
        
        // 5. Define o texto visível para o usuário (com inicial maiúscula)
        option.textContent = produto.nome.charAt(0).toUpperCase() + produto.nome.slice(1);
        
        // 6. Adiciona a opção configurada dentro do select
        selectProduto.appendChild(option);
    });
});
    
    // VERIFICAÇÃO 1: Se estiver na página do FORMULÁRIO
    const selectProduto = document.getElementById("produto");
    if (selectProduto) {
        // Popula as opções dinamicamente usando o Array
        produtos.forEach(produto => {
            const option = document.createElement("option");
            option.value = producto.id;       // O ID do array vai no atributo 'value'
            option.textContent = producto.nome; // O Nome do array vai no conteúdo de texto
            selectProduto.appendChild(option);
        });
    }

    // VERIFICAÇÃO 2: Se estiver na página de CONFIRMAÇÃO (avaliacao.html)
    const contadorTexto = document.getElementById("contador-avaliacoes");
    if (contadorTexto) {
        // 1. Busca o valor atual salvo no localStorage (se não existir, assume 0)
        let totalAvaliacoes = localStorage.getItem("contadorAvaliacoes");
        totalAvaliacoes = totalAvaliacoes ? parseInt(totalAvaliacoes, 10) : 0;
        
        // 2. Incrementa mais um ao contador pela nova submissão bem-sucedida
        totalAvaliacoes += 1;
        
        // 3. Salva o novo valor de volta no localStorage
        localStorage.setItem("contadorAvaliacoes", totalAvaliacoes);
        
        // 4. Atualiza o número na tela de forma amigável para o usuário
        contadorTexto.textContent = totalAvaliacoes;
    }
});