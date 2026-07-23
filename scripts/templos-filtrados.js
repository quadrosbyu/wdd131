// Array de Objetos de Templos (Expandido para 10 itens)
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
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
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
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
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
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "Cidade do México, México",
    localizacao: "Cidade do México, México",
    consagracao: "1983, 2 de dezembro",
    area: 116642,
    urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    nomeDoTemplo: "São Paulo Brasil",
    localizacao: "São Paulo, Brasil",
    consagracao: "1978, 30 de outubro",
    area: 59246,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Roma Itália",
    localizacao: "Roma, Itália",
    consagracao: "2019, 10 de março",
    area: 40000,
    urlDaImagem: "https://churchofjesuschrist.org"
  },
  {
    nomeDoTemplo: "Salt Lake",
    localizacao: "Salt Lake City, Utah, Estados Unidos",
    consagracao: "1893, 6 de abril",
    area: 382207,
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

    // Função interna para renderizar os cards na tela
    function exibirTemplos(listaFiltrada) {
        container.innerHTML = ""; // Limpa a galeria atual
        
        listaFiltrada.forEach(templo => {
            const card = document.createElement("figure");
            card.classList.add("temple-card"); // Utilize esta classe no CSS para estilizar os cards

            card.innerHTML = `
                <h3>${templo.nomeDoTemplo}</h3>
                <p><strong>Localização:</strong> ${templo.localizacao}</p>
                <p><strong>Consagração:</strong> ${templo.consagracao}</p>
                <p><strong>Área:</strong> ${templo.area.toLocaleString()} m²</p>
                <img src="${templo.urlDaImagem}" alt="Templo de ${templo.nomeDoTemplo}" loading="lazy">
            `;
            container.appendChild(card);
        });
    }

    // Extrai o ano numérico de uma string de consagração (Ex: "2005, 7 de agosto" -> 2005)
    function obterAnoConsagracao(dataStr) {
        return parseInt(dataStr.split(",")[0].trim());
    }

    // --- CONFIGURAÇÃO DOS EVENTOS DE FILTRO ---
    document.getElementById("home").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Todos";
        exibirTemplos(templos);
    });

    document.getElementById("antigo").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Antigos (Antes de 1900)";
        const filtrados = templos.filter(t => obterAnoConsagracao(t.consagracao) < 1900);
        exibirTemplos(filtrados);
    });

    document.getElementById("novo").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Novos (Depois de 2000)";
        const filtrados = templos.filter(t => obterAnoConsagracao(t.consagracao) > 2000);
        exibirTemplos(filtrados);
    });

    document.getElementById("grande").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Grandes (Mais de 90.000 m²)";
        const filtrados = templos.filter(t => t.area > 90000);
        exibirTemplos(filtrados);
    });

    document.getElementById("pequeno").addEventListener("click", (e) => {
        e.preventDefault();
        tituloGaleria.textContent = "Galeria de Templos - Pequenos (Menos de 10.000 m²)";
        const filtrados = templos.filter(t => t.area < 10000);
        exibirTemplos(filtrados);
    });

    // Renderização inicial padrão (Página Inicial)
    exibirTemplos(templos);
});