document.addEventListener("DOMContentLoaded", function() {
    const animalCards = document.querySelectorAll(".animal-card");
    const animalTypeFilter = document.getElementById("animal-type");
    const ageFilter = document.getElementById("age");
    const sizeFilter = document.getElementById("size");

    function filterAnimals() {
        const selectedType = animalTypeFilter.value;
        const selectedAge = ageFilter.value;
        const selectedSize = sizeFilter.value;

        animalCards.forEach(card => {
            const type = card.querySelector("strong:contains('Raza:')").nextSibling.textContent.trim();
            const age = card.querySelector("strong:contains('Edad:')").nextSibling.textContent.trim();
            const size = card.querySelector("strong:contains('Tamaño:')").nextSibling.textContent.trim();

            const typeMatch = (selectedType === "todos" || type.includes(selectedType));
            const ageMatch = (selectedAge === "todos" || age.includes(selectedAge));
            const sizeMatch = (selectedSize === "todos" || size.includes(selectedSize));

            if (typeMatch && ageMatch && sizeMatch) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    animalTypeFilter.addEventListener("change", filterAnimals);
    ageFilter.addEventListener("change", filterAnimals);
    sizeFilter.addEventListener("change", filterAnimals);
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("adoption-form");
    const confirmationMessage = document.getElementById("confirmation-message");
    const errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente (recarga de página)

        // Obtener los valores de los campos
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const animalName = document.getElementById("animal-name").value.trim();
        const reason = document.getElementById("reason").value.trim();

        // Validar los campos
        if (name && email && animalName && reason) {
            // Mostrar mensaje de confirmación
            confirmationMessage.style.display = "block";
            errorMessage.style.display = "none";

            // Aquí podrías hacer algo con los datos, como enviarlos a un servidor (esto es solo una simulación)
            console.log("Solicitud de adopción enviada:");
            console.log("Nombre:", name);
            console.log("Correo:", email);
            console.log("Animal:", animalName);
            console.log("Razón:", reason);

            // Limpiar el formulario
            form.reset();
        } else {
            // Mostrar mensaje de error si falta algún campo
            errorMessage.style.display = "block";
            confirmationMessage.style.display = "none";
        }
    });
});
