
// Função para o Simulador de Produção
function calcularProducao() {
    const hectares = document.getElementById('hectares').value;
    const resultado = document.getElementById('resultado');

    if (hectares > 0) {
        // Média fictícia: 3000kg por hectare
        const producaoTotal = hectares * 3000;
        resultado.innerHTML = `Estimativa de Produção: ${producaoTotal.toLocaleString()} kg de grãos!`;
        resultado.style.color = "#2d5a27";
    } else {
        resultado.innerHTML = "Por favor, insira um valor válido.";
        resultado.style.color = "red";
    }
}

// Efeito de Revelação ao Descer a Página
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
