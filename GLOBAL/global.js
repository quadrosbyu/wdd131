// Banco de dados simulado em um Array de Objetos
const produtos = [
    { id: 1, nome: "SSD 480GB Kingston", preco: 249.90, categoria: "armazenamento", img: "https://picsum.photos" },
    { id: 2, nome: "HD Externo 1TB Seagate", preco: 389.00, categoria: "armazenamento", img: "https://picsum.photos" },
    { id: 3, nome: "Mouse Gamer Redragon", preco: 120.00, categoria: "perifericos", img: "https://picsum.photos" },
    { id: 4, nome: "Teclado Mecânico RGB", preco: 299.90, categoria: "perifericos", img: "https://picsum.photos" }
];

// Inicialização do Carrinho puxando do LocalStorage (uso de Branch Condicional)
let carrinho = JSON.parse(localStorage.getItem('techfix_carrinho')) || [];

// Aguarda carregamento total do DOM
document.addEventListener("DOMContentLoaded", () => {
    // Verifica qual página está ativa para aplicar a lógica específica sem disparar erros
    if (document.getElementById('lista-produtos')) {
        renderizarProdutos(produtos);
        atualizarCarrinhoDOM();
        configurarFiltros();
    }

    if (document.getElementById('form-contato')) {
        configurarFormulario();
    }
});

/* ==========================================
   FUNÇÃO 1: Renderizar Produtos e Lazy Load 
   ========================================== */
function renderizarProdutos(lista) {
    const vitrine = document.getElementById('lista-produtos');
    vitrine.innerHTML = ""; // Limpa a área

    lista.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'card-produto';
        
        // Uso exclusivo de Template Literal e técnica de Carregamento Lento (loading="lazy")
        card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nome}" loading="lazy">
            <h3>${prod.nome}</h3>
            <p>R$ ${prod.preco.toFixed(2)}</p>
            <button class="btn" onclick="adicionarAoCarrinho(${prod.id})">Adicionar</button>
        `;
        vitrine.appendChild(card);
    });
}

/* ==========================================
   FUNÇÃO 2: Interação e Manipulação do Carrinho
   ========================================== */
function adicionarAoCarrinho(id) {
    // Uso de métodos de array (find)
    const produto = produtos.find(p => p.id === id);
    
    if (produto) {
        carrinho.push(produto);
        // Uso do localStorage para manter persistência
        localStorage.setItem('techfix_carrinho', JSON.stringify(carrinho));
        atualizarCarrinhoDOM();
    }
}

function atualizarCarrinhoDOM() {
    const container = document.getElementById('itens-carrinho');
    const totalSpan = document.getElementById('valor-total');
    container.innerHTML = "";

    // Uso de Branch Condicional estruturado
    if (carrinho.length === 0) {
        container.innerHTML = `<p>Seu carrinho está vazio.</p>`;
        totalSpan.textContent = `R$ 0,00`;
        return;
    }

    // Renderiza cada item no carrinho usando Template Literal
    carrinho.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.style.marginBottom = "10px";
        itemDiv.innerHTML = `
            <div>
                <strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}
                <button onclick="removerDoCarrinho(${index})" style="color:red; background:none; border:none; cursor:pointer; margin-left:10px;">[Remover]</button>
            </div>
        `;
        container.appendChild(itemDiv);
    });

    // Uso de método de array (reduce) para cálculo matemático limpo do total
    const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
    totalSpan.textContent = `R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    // Remove o elemento do Array pelo índice
    carrinho.splice(index, 1);
    localStorage.setItem('techfix_carrinho', JSON.stringify(carrinho));
    atualizarCarrinhoDOM();
}

// Ouvinte de Evento no botão de Limpar todo o carrinho
if (document.getElementById('btn-limpar')) {
    document.getElementById('btn-limpar').addEventListener('click', () => {
        carrinho = [];
        localStorage.removeItem('techfix_carrinho');
        atualizarCarrinhoDOM();
    });
}

/* ==========================================
   FUNÇÃO 3: Filtros Dinâmicos (Categoria)
   ========================================== */
function configurarFiltros() {
    const botoes = document.querySelectorAll('.btn-filtro');
    
    botoes.forEach(botao => {
        botao.addEventListener('click', (e) => {
            const categoria = e.target.getAttribute('data-categoria');
            
            // Branch condicional aplicando lógica de filtragem por métodos de array (filter)
            if (categoria === 'todos') {
                renderizarProdutos(produtos);
            } else {
                const filtrados = produtos.filter(p => p.categoria === categoria);
                renderizarProdutos(filtrados);
            }
        });
    });
}

/* ==========================================
   FUNÇÃO 4: Validação do Formulário Baseada em Padrões
   ========================================== */
function configurarFormulario() {
    const form = document.getElementById('form-contato');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio real do formulário
        
        let valid = true;
        
        // Seleção de elementos do DOM
        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const equipamento = document.getElementById('equipamento');
        const mensagem = document.getElementById('mensagem');

        // Validações com Branch Condicional e modificação do DOM para feedback visual
        if (nome.value.trim().length < 3) {
            document.getElementById('erro-nome').textContent = "O nome precisa ter pelo menos 3 caracteres.";
            valid = false;
        } else {
            document.getElementById('erro-nome').textContent = "";
        }

        if (!email.value.includes('@') || email.value.trim().length < 5) {
            document.getElementById('erro-email').textContent = "Insira um endereço de e-mail válido.";
            valid = false;
        } else {
            document.getElementById('erro-email').textContent = "";
        }

        if (equipamento.value === "") {
            document.getElementById('erro-equipamento').textContent = "Selecione o equipamento defeituoso.";
            valid = false;
        } else {
            document.getElementById('erro-equipamento').textContent = "";
        }

        if (mensagem.value.trim().length < 10) {
            document.getElementById('erro-mensagem').textContent = "Escreva mais detalhes sobre o defeito (mínimo 10 caracteres).";
            valid = false;
        } else {
            document.getElementById('erro-mensagem').textContent = "";
        }

        // Se passar em todos os testes estruturais
        if (valid) {
            const caixaSucesso = document.getElementById('sucesso-envio');
            caixaSucesso.innerHTML = `Obrigado, <strong>${nome.value}</strong>! Sua solicitação de orçamento para o equipamento <strong>${equipamento.value}</strong> foi enviada com sucesso.`;
            caixaSucesso.style.display = "block";
            form.reset(); // Limpa os campos
        }
    });
}