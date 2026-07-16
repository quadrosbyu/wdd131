document.addEventListener("DOMContentLoaded", () => {
    // 1. Atualizar o ano atual e a última modificação no rodapé
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

    // 2. Cálculo de Sensação Térmica (Wind Chill) dinâmico
    const tempElement = document.getElementById("temp");
    const windElement = document.getElementById("wind");
    const chillElement = document.getElementById("chill");

    if (tempElement && windElement && chillElement) {
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windElement.textContent);

        // A fórmula padrão do Wind Chill requer Temp <= 10°C e Vento > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
            chillElement.textContent = `${windChill.toFixed(1)} °C`;
        } else {
            chillElement.textContent = "Não aplicável";
        }
    }
});