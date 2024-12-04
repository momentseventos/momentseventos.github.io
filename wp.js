document.getElementById('seccion-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
    
    // Recogemos los valores del formulario
    var tipoEvento = document.getElementById('tipo-evento').value;
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('comentario').value;

    // Preparamos el mensaje para WhatsApp
    var mensaje = `Hola! Quiero mas informacion\n\nTipo de evento: ${tipoEvento}\nNombre: ${nombre}\nTeléfono: ${telefono}\nCorreo: ${email}\nComentario: ${comentario}`;

    // El número de WhatsApp al que se enviarán los datos (incluye el código de país)
    var numeroWhatsapp = "3513813868"; // Cambia esto por tu número

    // Creamos el enlace para WhatsApp
    var url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensaje)}`;

    // Redirigimos a WhatsApp
    window.open(url, '_blank');
});