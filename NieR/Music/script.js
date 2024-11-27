// Selecciona todos los elementos de la lista
const listItems = document.querySelectorAll('ul li');

listItems.forEach(item => {
    // Agrega un evento click a cada elemento de la lista
    item.addEventListener('click', () => {
        // Verifica si ya hay un audio en reproducción
        const currentlyPlaying = document.querySelector('audio');
        
        if (currentlyPlaying) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0; // Reinicia el audio
        }

        // Crea un nuevo elemento de audio
        const audioSource = item.getAttribute('data-audio');
        const audio = new Audio(audioSource);
        
        // Reproduce el audio
        audio.play();

        // Expande el cuadrado
        item.classList.toggle('expanded');
    });
});
