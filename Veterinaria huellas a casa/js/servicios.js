// Ejemplo de animación para los servicios al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-item');

    function revealServiceItems() {
        const scrollPosition = window.scrollY + window.innerHeight;
        
        serviceItems.forEach(item => {
            if (item.offsetTop < scrollPosition) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealServiceItems);
});
