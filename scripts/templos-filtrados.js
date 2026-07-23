// Array contendo os 10 objetos de templos solicitados
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://churchofjesuschristtemples.org/manti-utah-temple/photographs/#Official-16"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo-guam-temple-lds-273997-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-lds-273996-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brasil/400x250/curitiba-brasil-temple-lds-273995-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Frankfurt Alemanha",
    localizacao: "Friedrichsdorf, Alemanha",
    consagracao: "1987, 28 de agosto",
    area: 32895,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-alemanha/400x250/frankfurt-alemanha-temple-lds-273994-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Paris França",
    localizacao: "Le Chesnay, França",
    consagracao: "2017, 21 de maio",
    area: 44175,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-franca/400x250/paris-franca-temple-lds-273993-wallpaper.jpg"
  }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // --- ELEMENTOS DO DOM ---
    const container = document.getElementById("grid-container");
    const tituloGaleria = document.querySelector("main h1");
    const linksMenu = document.querySelectorAll("nav ul li a");

    // --- GERENCIAMENTO DO MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            if (navMenu.classList.contains("open")) {
                menuToggle.textContent = "X";
                menuToggle.setAttribute("aria-label", "Fechar menu");
            } else {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-label", "Abrir menu");
            }
        });
    }

    // --- DATAS DO RODAPÉ ---
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

    // --- FUNÇÃO PARA CRIAR E EXIBIR OS CARTÕES DOS TEMPLOS ---
    function exibirTemplos(listaFiltrada) {
        // Limpa todos os elementos internos antigos da grid
        container.innerHTML = ""; 
        
        listaFiltrada.forEach(templo => {
            // Cria o elemento estrutural <figure> exigido para imagens com legenda
            const card = document.createElement("figure");
            card.classList.add("temple-card");

            // Define o HTML interno com chaves idênticas ao objeto e carregamento lento nativo
            card.innerHTML = `
                <h3>${templo.nomeDoTemplo}</h3>
                <p><strong>Localização:</strong> ${templo.localizacao}</p>
                <p><strong>Consagração:</strong> ${templo.consagracao}</p>
                <p><strong>Área total:</strong> ${templo.area.toLocaleString()} pés²</p>
                <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy">
            `;
            container.appendChild(card);
        });
    }

    // --- FUNÇÃO AUXILIAR PARA EXTRAIR O ANO DA STRING ---
    // Transforma "2005, 7 de agosto" no número inteiro 2005 de forma segura
    function obterAno(stringConsagracao) {
        const partes = stringConsagracao.split(",");
        return parseInt(partes[0].trim(), 10);
    }

    // --- SISTEMA DINÂMICO DE FILTRAGEM BASEADO NO TEXTO DO LINK ---
    linksMenu.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que a página recarregue ao clicar no link '#'

            const opcaoFiltro = link.textContent.trim();
            let resultadoFiltro = [];

            // Estrutura condicional para validar as regras solicitadas de negócio
            if (opcaoFiltro === "Página Inicial") {
                tituloGaleria.textContent = "Galeria de Templos";
                resultadoFiltro = templos;
            } else if (opcaoFiltro === "Antigo") {
                tituloGaleria.textContent = "Galeria de Templos - Antigos (Antes de 1900)";
                resultadoFiltro = templos.filter(t => obterAno(t.consagracao) < 1900);
            } else if (opcaoFiltro === "Novo") {
                tituloGaleria.textContent = "Galeria de Templos - Novos (Depois de 2000)";
                resultadoFiltro = templos.filter(t => obterAno(t.consagracao) > 2000);
            } else if (opcaoFiltro === "Grande") {
                tituloGaleria.textContent = "Galeria de Templos - Grandes (Mais de 90.000 pés²)";
                resultadoFiltro = templos.filter(t => t.area > 90000);
            } else if (opcaoFiltro === "Pequeno") {
                tituloGaleria.textContent = "Galeria de Templos - Pequenos (Menos de 10.000 pés²)";
                resultadoFiltro = templos.filter(t => t.area < 10000);
            }

            // Executa a atualização visual dos cards na tela
            exibirTemplos(resultadoFiltro);
        });
    });

    // Inicialização da página carregando todos os templos automaticamente
    exibirTemplos(templos);
});