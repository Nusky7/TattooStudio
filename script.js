document.addEventListener('DOMContentLoaded', function () {
    const current = document.getElementById('current');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const opacity = 1;
    const leftButton = document.querySelector('.nav-button-L');
    const rightButton = document.querySelector('.nav-button-R');
    let thisIndex = 0;

    thumbnails[0].style.opacity = opacity;

    thumbnails.forEach(img => img.addEventListener('click', (e) => {
        // Resetear la opacidad de cada miniatura
        thumbnails.forEach(img => (img.style.opacity = 0.5));
        // Cambiar la imagen actual a la imagen clicada
        current.src = e.target.src;

        current.classList.add('fade-in');
        setTimeout(() => current.classList.remove('fade-in'), 500);
        e.target.style.opacity = opacity;
    }));

    // Añade clase fade-in al estilo
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }
        .fade-in {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);

    function updateThumbnails() {
        const visibleThumbs = 5;

        thumbnails.forEach((img, index) => {
            if (index >= thisIndex && index < thisIndex + visibleThumbs) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    leftButton.addEventListener('click', () => {
        if (thisIndex > 0) {
            thisIndex--;
            updateThumbnails();
        }
    });

    rightButton.addEventListener('click', () => {
        if (thisIndex < thumbnails.length - 5) {
            thisIndex++;
            updateThumbnails();
        }
    });

    updateThumbnails();
});

    function toggleAutor() {
        var content = document.getElementById("autor-content");
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    document.getElementById('whatsappForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var msg = document.getElementById('msg').value;
        
        var message = `Nombre: ${name}\nContacto: ${email}\nConsulta: ${msg}`;
        // Codifica el mensaje para la URL de whatsapp
        var encodedMessage = encodeURIComponent(message);
        var phoneNumber = '+34675260296';
        
        var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    });
