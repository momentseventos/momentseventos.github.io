// Añade un evento para iniciar la animación de entrada
window.addEventListener('load', () => {
    document.body.classList.add('fade-in');
});

// Captura clics en enlaces y realiza la animación de salida
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Evita el cambio de página inmediato
        const href = link.getAttribute('href'); // Obtén el destino

        // Añade la clase de desvanecimiento
        document.body.classList.add('fade-out');

        // Espera a que termine la animación antes de redirigir
        setTimeout(() => {
            window.location.href = href;
        }, 500); // 500ms coincide con la duración de la animación
    });
});
