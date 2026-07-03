// Seleciona os elementos do rodapé pelos seus respectivos IDs
const yearSpan = document.getElementById("currentyear");
const lastModifiedSpan = document.getElementById("lastModified");

// Obtém o ano atual dinamicamente e injeta no primeiro parágrafo
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Obtém a data/hora da última modificação do arquivo e injeta no segundo parágrafo
lastModifiedSpan.textContent = document.lastModified;