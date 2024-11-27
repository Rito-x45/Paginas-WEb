// Script para gestionar el envío del formulario y mostrar el mensaje con los datos ingresados
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío tradicional del formulario

    // Obtención de los valores del formulario
    const ownerName = document.getElementById("owner-name").value;
    const ownerPhone = document.getElementById("owner-phone").value;
    const ownerEmail = document.getElementById("owner-email").value;
    const ownerAddress = document.getElementById("owner-address").value;
    const petName = document.getElementById("pet-name").value;
    const petSpecies = document.getElementById("pet-species").value;
    const petBreed = document.getElementById("pet-breed").value;
    const petAge = document.getElementById("pet-age").value;
    const petGender = document.getElementById("pet-gender").value;
    const petSize = document.getElementById("pet-size").value;
    const reason = document.getElementById("reason").value;
    const reasonDetails = document.getElementById("reason-details").value;
    const appointmentDate = document.getElementById("appointment-date").value;
    const vaccinated = document.getElementById("vaccinated").value;
    const medications = document.getElementById("medications").value;
    const medicationsDetails = document.getElementById("medications-details").value;
    const previousSurgery = document.getElementById("previous-surgery").value;
    const previousSurgeryDetails = document.getElementById("previous-surgery-details").value;
    const questions = document.getElementById("questions").value;

    // Mostrar el alerta con los datos del formulario
    alert(`
        Datos del propietario:
        Nombre: ${ownerName}
        Teléfono: ${ownerPhone}
        Correo: ${ownerEmail}
        Dirección: ${ownerAddress}

        Información de la mascota:
        Nombre de la mascota: ${petName}
        Especie: ${petSpecies}
        Raza: ${petBreed}
        Edad: ${petAge}
        Sexo: ${petGender}
        Tamaño: ${petSize}

        Razón de la visita: ${reason}
        Detalles de la razón: ${reasonDetails}

        Fecha y hora solicitada: ${appointmentDate}

        Información adicional:
        Vacunas: ${vaccinated}
        Medicamentos: ${medications} - ${medicationsDetails}
        Cirugía previa: ${previousSurgery} - ${previousSurgeryDetails}
        Preguntas/Comentarios: ${questions}
    `);

    // Opcional: Puedes agregar el código para enviar los datos a un servidor si lo deseas.
});
