window.onload = function() {
    // Mensaje de bienvenida al cargar la página
    alert("¡Bienvenido a la sección de personajes de NieR: Automata!");

    // Añadir eventos a los personajes para mostrar información adicional
    const personajes = document.querySelectorAll('.personaje h3');

    personajes.forEach(personaje => {
        personaje.addEventListener('click', function() {
            const nombre = this.innerText;
            let infoExtra;

            switch (nombre) {
                case '2B':
                    infoExtra = "2B es conocida por su destreza en combate y su determinación.";
                    break;
                case '9S':
                    infoExtra = "9S es un experto en hacking y tiene una gran curiosidad por el mundo.";
                    break;
                case 'A2':
                    infoExtra = "A2 es un personaje misterioso que busca redención.";
                    break;
                default:
                    infoExtra = "Información no disponible.";
            }

            alert(infoExtra);
        });
    });
};
