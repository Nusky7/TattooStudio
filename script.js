
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


    new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,   
        spaceBetween: 3,
        centeredSlides: true, 
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,   
            stretch: 0,   
            depth: 100,     
            modifier: 1,
            slideShadows: true, 
        },
        autoHeight: true,
        // loop: true,
        slidesPerView: 1,
        // zoom: {
        //     limitToOriginalSize: false,
        //     minRatio: 0.3,
        //     maxRatio: 2,
        //     panOnMouseMove: true,
        //     toggle: true,
        // },
        autoplay: {
            delay: 7000,
            pauseOnMouseEnter: true
        },
        // thumbs: {
        //     swiper: galleryThumbs,
        // },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1500: {
                slidesPerView: 3,
            },
        },
    });
   
});