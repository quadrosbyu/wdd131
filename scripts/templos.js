// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // --- GERENCIAMENTO DO MENU HAMBÚRGUER ---
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", () => {
            // Alterna a classe 'open' no menu de navegação
            navMenu.classList.toggle("open");
            
            // Alterna o símbolo entre Hambúrguer (☰) e Fechar (X)
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

    // Injeta o ano corrente automaticamente
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Injeta a data da última modificação do arquivo
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});