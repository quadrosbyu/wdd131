// Array de Objetos de Templos (Atualizado com mais 3 templos reais)
const templos = [
  {
    nomeDoTemplo: "Aba Nigeria",
    localizacao: "Aba, Nigéria",
    consagracao: "2005, 7 de agosto",
    area: 11500,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Manti Utah",
    localizacao: "Manti, Utah, Estados Unidos",
    consagracao: "1888, 21 de maio",
    area: 74792,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Payson Utah",
    localizacao: "Payson, Utah, Estados Unidos",
    consagracao: "2015, 7 de junho",
    area: 96630,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Yigo Guam",
    localizacao: "Yigo, Guam",
    consagracao: "2020, 2 de maio",
    area: 6861,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Washington D.C.",
    localizacao: "Kensington, Maryland, Estados Unidos",
    consagracao: "1974, 19 de novembro",
    area: 156558,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Lima Peru",
    localizacao: "Lima, Peru",
    consagracao: "1986, 10 de janeiro",
    area: 9600,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Curitiba Brasil",
    localizacao: "Curitiba, Paraná, Brasil",
    consagracao: "2008, 1 de junho",
    area: 27850,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Frankfurt Alemanha",
    localizacao: "Friedrichsdorf, Alemanha",
    consagracao: "1987, 28 de agosto",
    area: 32895,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Paris França",
    localizacao: "Le Chesnay, França",
    consagracao: "2017, 21 de maio",
    area: 44175,
    urlDaImagem: "https://churchofjesuschrist.org"
  }
];

// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
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

    // --- GERENCIAMENTO DE DATAS NO RODAPÉ ---
    const yearSpan = document.getElementById("currentyear");
    const lastModifiedSpan = document.getElementById("lastModified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

    // --- GERENCIAMENTO DA GALERIA DINÂMICA ---
    const container = document.getElementById("grid-container");
    const tituloGaleria = document.getElementById("gallery-title");

    // Função responsável por iterar no array e criar os "Cartões de Templo"
    function exibirTemplos(listaFiltrada) {
        container.innerHTML = ""; // Limpa os elementos antigos da página
        
        listaFiltrada.forEach(templo => {
            // Cria o elemento estrutural ideal para cartões de imagem (figure)
            const card = document.createElement("figure");
            card.classList.add("temple-card");

            // Injeta a estrutura HTML estruturada com carregamento lento nativo (loading="lazy")
            card.innerHTML = `
                <h3>${templo.nomeDoTemplo}</h3>
                <p><span class="label">Localização:</span> ${templo.localizacao}</p>
                <p><span class="label">Consagração:</span> ${templo.consagracao}</p>
                <p><span class="label">Área total:</span> ${templo.area.toLocaleString()} pés²</p>
                <img src="${templo.urlDaImagem}" alt="Fotografia do Templo de ${templo.nomeDoTemplo}" loading="lazy">
            `;
            container.appendChild(card);
        });
    }

    // Função auxiliar para extrair o ano de forma segura da string de consagração (Pega os primeiros 4 caracteres numéricos)
    function obterAnoConsagracao(dataStr) {
        return parseInt(dataStr.split(",")[0].trim());
    }

    // --- CONFIGURAÇÃO DOS EVENTOS DE FILTRAGEM ---
    
    // Página Inicial – exibe todos os templos armazenados no array
    document.getElementById("home").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Todos";
        exibirTemplos(templos);
    });

    // Antigos – templos construídos antes de 1900
    document.getElementById("antigo").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Antigos (Antes de 1900)";
        const filtrados = templos.filter(t => obterAnoConsagracao(t.consagracao) < 1900);
        exibirTemplos(filtrados);
    });

    // Novos – templos construídos depois de 2000
    document.getElementById("novo").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Novos (Depois de 2000)";
        const filtrados = templos.filter(t => obterAnoConsagracao(t.consagracao) > 2000);
        exibirTemplos(filtrados);
    });

    // Grandes – templos maiores que 90.000 pés quadrados
    document.getElementById("grande").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Grandes (Mais de 90.000 pés²)";
        const filtrados = templos.filter(t => t.area > 90000);
        exibirTemplos(filtrados);
    });

    // Pequenos – templos menores que 10.000 pés quadrados
    document.getElementById("pequeno").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Pequenos (Menos de 10.000 pés²)";
        const filtrados = templos.filter(t => t.area < 10000);
        exibirTemplos(filtrados);
    });

    // Renderização inicial automática da página com todos os templos
    exibirTemplos(templos);
});