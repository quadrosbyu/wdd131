// Array de Produtos completo fonte de dados
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
    classificacaomedia: 3.9
  },
  {
    id: "jj-1969",
    nome: "equalizador de distorção",
    classificacaomedia: 5.0
  }
];

// Seleciona o elemento select através do ID 'produto'
const selectProduto = document.getElementById("produto");

// Itera sobre o array para criar e injetar as opções
produtos.forEach(produto => {
  const option = document.createElement("option");
  
  // Define o atributo value com o id do objeto
  option.value = produto.id;
  
  // Define o texto visível com o nome do objeto
  option.textContent = produto.nome;
  
  // Adiciona o elemento <option> dentro do <select>
  selectProduto.appendChild(option);
});