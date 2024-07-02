document.addEventListener('DOMContentLoaded', function () {
    const current = document.getElementById('current');
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const leftButton = document.querySelector('.nav-button-L');
    const rightButton = document.querySelector('.nav-button-R');
    let thisIndex = 0;

    thumbnails.forEach(img => { 
        img.style.opacity = 0.6;
        img.addEventListener('click', handleThumbnailClick)});
    leftButton.addEventListener('click', handleLeftButtonClick);
    rightButton.addEventListener('click', handleRightButtonClick);

    function handleThumbnailClick(e) {
        thumbnails.forEach(img => {
            img.style.opacity = 0.6;
            img.classList.remove('selected');
        });

        current.src = e.target.src;
        e.target.classList.add('selected');
        fadeInImage(current);
        e.target.style.opacity = 1;
    }

    function fadeInImage(element) {
        element.classList.add('fade-in');
        setTimeout(() => element.classList.remove('fade-in'), 500);
    }

    function handleLeftButtonClick() {
        if (thisIndex > 0) {
            thisIndex--;
            updateThumbnails();
        }
    }

    function handleRightButtonClick() {
        if (thisIndex < thumbnails.length - 5) {
            thisIndex++;
            updateThumbnails();
        }
    }

    function updateThumbnails() {
        const visibleThumbs = 5;

        thumbnails.forEach((img, index) => {
            img.style.display = (index >= thisIndex && index < thisIndex + visibleThumbs) ? 'block' : 'none';
        });
    }

    updateThumbnails();
});

function toggleAutor() {
    let content = document.getElementById("autor-content");
    content.style.display = (content.style.display === "none" || content.style.display === "") ? "block" : "none";
}

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

function openChat() {
    let left= window.innerWidth;
    window.open("https://my.inkup.io/Miguel-Angel-Marco-", "Chat", "width=400,height=600,resizable=yes, left="+left);
}
