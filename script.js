var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4, // Mostrar 4 elementos por defecto
    spaceBetween: 10,  // Espaciado entre los elementos
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // En pantallas grandes, mostrar 4 elementos
        1024: {
            slidesPerView: 4,
        },
        // En pantallas pequeñas, mostrar 2 elementos
        768: {
            slidesPerView: 2,
        },
        // En móviles muy pequeños, mostrar 1 solo elemento
        400: {
            slidesPerView: 1,
        }
    }
});