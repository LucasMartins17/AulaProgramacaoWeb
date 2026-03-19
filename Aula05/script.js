// 1. GERENCIAMENTO DO MODELO 3D (Otimizado)
const modelViewer = document.querySelector("#obj-3d");

// Caso queira que ele gire levemente com o scroll, mantenha isto:
window.addEventListener("scroll", () => {
    if (modelViewer) {
        const rotation = window.scrollY / 5;
        modelViewer.orientation = `0deg ${rotation}deg 0deg`;
    }
});

// 2. SISTEMA DE XP COM PERSISTÊNCIA E REDIRECIONAMENTO
function atualizarXPDisplay() {
    const totalXP = localStorage.getItem('total_xp') || 0;
    const display = document.getElementById('total-xp');
    if (display) {
        display.innerText = totalXP;
    }
}

function ganharXP() {
    // Lógica de cálculo
    let atual = parseInt(localStorage.getItem('total_xp') || 0);
    atual += 100;
    localStorage.setItem('total_xp', atual);
    
    // Atualiza o número na tela imediatamente
    atualizarXPDisplay();
    
    // Feedback visual no botão
    // Buscamos o botão dentro do cabeçalho ou hero
    const btn = document.querySelector('.btn-primary');
    if (btn) {
        btn.innerHTML = "<i class='fas fa-check'></i> Forjando...";
        btn.style.opacity = "0.8";
    }
    
    // Efeito de Level Up na Logo
    if (atual >= 500) {
        const logo = document.querySelector('.logo');
        if (logo) logo.style.color = "#a855f7"; 
    }

    // REDIRECIONAMENTO
    // Espera 1 segundo para o usuário sentir o "feedback" e muda de página
    setTimeout(() => {
        window.location.href = "func.html";
    }, 1000);
}

// 3. INICIALIZAÇÃO
// Executa assim que a página carrega para recuperar o XP do LocalStorage
window.addEventListener('DOMContentLoaded', () => {
    atualizarXPDisplay();
    
    // Se o usuário já tiver muito XP, mantém a logo roxa desde o início
    let atual = parseInt(localStorage.getItem('total_xp') || 0);
    if (atual >= 500) {
        const logo = document.querySelector('.logo');
        if (logo) logo.style.color = "#a855f7";
    }
});
