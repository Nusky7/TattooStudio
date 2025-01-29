
    function openChat() {
    let left= window.innerWidth;
    window.open("https://my.inkup.io/Miguel-Angel-Marco-", "Chat", "width=400,height=600,resizable=yes, left="+left);
    }

document.addEventListener("DOMContentLoaded", () => {
document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let msg = document.getElementById('msg').value;
    
    let message = `Nombre: ${name}\nContacto: ${email}\nConsulta: ${msg}`;
    let encodedMessage = encodeURIComponent(message);
    let phoneNumber = '+34601262765';
    
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
});
    
    // Swiper de los thumbs
    const galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 1, 
        slidesPerView: "auto", 
        grid: {
            rows: 2, 
            fill: 'row', 
        },
        freeMode: true, 
        watchSlidesProgress: false, 
          breakpoints: {
        200: { slidesPerView: 2 }, // 5 columnas en pantallas pequeñas
        640: { slidesPerView: 5 }, // 5 columnas en pantallas pequeñas
        768: { slidesPerView: 6 }, // 6 columnas en tablets
        1024: { slidesPerView: 9 }, // 9 columnas en pantallas grandes
    },
    });

    new Swiper('.swiper-container', {
        thumbs: {
        swiper: galleryThumbs, 
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 50,   
            stretch: 0,   
            depth: 100,     
            modifier: 1,
            slideShadows: true, 
        },
        // grabCursor: true,   
        spaceBetween: 6,
        centeredSlides: true, 
        slidesPerView: "auto",
        autoHeight: true,
        loop: true,
        slidesPerView: 1,
        zoom: {
            limitToOriginalSize: false,
            minRatio: 1,
            maxRatio: 1.8,
            panOnMouseMove: true,
            toggle: true,
        },
        autoplay: {
            delay: 6000,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
        el: '.swiper-progressbar',
            type: 'progressbar',
        
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1500: {
                slidesPerView: 4,
            },
        },
    });

      // Capturar el click en cada thumbnail
    document.querySelectorAll('.gallery-thumbs .swiper-slide').forEach((thumb, index) => {
        thumb.addEventListener('click', (e) => {
            e.preventDefault();

            // Desplazarse al contenedor principal
            const swiperContainer = document.querySelector('.swiper-container');
            swiperContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Cambiar a la diapositiva correspondiente después de un pequeño retraso
            setTimeout(() => {
                galleryThumbs.slideTo(index);
            }, 300);
        });
    });
});