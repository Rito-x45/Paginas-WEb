const tiburones = [
  {
    nombre: "Tiburón Blanco",
    longitud: "6+ metros",
    habitat: "Aguas templadas y frías",
    presa: "Grandes mamíferos marinos",
    caracteristicas: "Cuerpo robusto, dentadura formidable",
  },
  {
    nombre: "Tiburón Tigre",
    longitud: "5 metros",
    habitat: "Aguas tropicales y subtropicales",
    presa: "Muy variada",
    caracteristicas: "Líneas verticales oscuras",
  },
  {
    nombre: "Tiburón Martillo",
    longitud: "Mediano",
    habitat: "Aguas costeras tropicales y subtropicales",
    presa: "Peces óseos y crustáceos",
    caracteristicas: "Cabeza en forma de martillo",
  },
  {
    nombre: "Tiburón Ballena",
    longitud: "12+ metros",
    habitat: "Aguas cálidas",
    presa: "Plancton, krill",
    caracteristicas: "Tamaño gigante, boca enorme",
  },
  {
    nombre: "Tiburón Mako",
    longitud: "Mediano a grande",
    habitat: "Aguas templadas y tropicales",
    presa: "Peces pelágicos",
    caracteristicas: "Muy rápido",
  },
  {
    nombre: "Tiburón Toro",
    longitud: "Mediano",
    habitat: "Aguas costeras tropicales y subtropicales",
    presa: "Peces óseos, rayas",
    caracteristicas: "Tolerancia a diferentes salinidades",
  },
  {
    nombre: "Tiburón Angelote",
    longitud: "Mediano",
    habitat: "Fondos marinos costeros",
    presa: "Peces óseos y crustáceos",
    caracteristicas: "Cuerpo aplanado",
  },
  {
    nombre: "Tiburón Linterna",
    longitud: "Pequeño",
    habitat: "Aguas profundas",
    presa: "Peces pequeños, crustáceos",
    caracteristicas: "Bioluminiscente",
  },
  {
    nombre: "Tiburón Martillo Gigante",
    longitud: "Grande",
    habitat: "Aguas tropicales y subtropicales",
    presa: "Peces óseos y rayas",
    caracteristicas: "Cabeza en forma de martillo muy ancha",
  },
  {
    nombre: "Tiburón Goblin",
    longitud: "Mediano",
    habitat: "Aguas profundas",
    presa: "Peces óseos, cefalópodos",
    caracteristicas: "Hocico largo y extensible",
  },
];

const tabla = document.createElement("table");
tabla.classList.add("tabla-comparativa");

const encabezado = document.createElement("tr");
const tituloColumna = ["Especie", "Longitud", "Habitat", "Presa", "Características"];
tituloColumna.forEach((titulo) => {
  const celda = document.createElement("th");
  celda.textContent = titulo;
  encabezado.appendChild(celda);
});
tabla.appendChild(encabezado);

tiburones.forEach((tiburon) => {
  const fila = document.createElement("tr");
  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = tiburon.nombre;
  fila.appendChild(celdaNombre);
  const celdaLongitud = document.createElement("td");
  celdaLongitud.textContent = tiburon.longitud;
  fila.appendChild(celdaLongitud);
  const celdaHabitat = document.createElement("td");
  celdaHabitat.textContent = tiburon.habitat;
  fila.appendChild(celdaHabitat);
  const celdaPresa = document.createElement("td");
  celdaPresa.textContent = tiburon.presa;
  fila.appendChild(celdaPresa);
  const celdaCaracteristicas = document.createElement("td");
  celdaCaracteristicas.textContent = tiburon.caracteristicas;
  fila.appendChild(celdaCaracteristicas);
  tabla.appendChild(fila);
});

document.body.appendChild(tabla);