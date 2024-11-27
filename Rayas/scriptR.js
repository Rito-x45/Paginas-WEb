const rayas = [
    {
      nombre: "Raya Común",
      longitud: "1 m",
      habitat: "Aguas poco profundas del Atlántico nororiental y el Mediterráneo",
      presa: "Pequeños invertebrados",
      caracteristicas: "Cuerpo aplanado con cola larga y fina y espinas dorsales",
    },
    {
      nombre: "Manta Raya Gigante",
      longitud: "7 m",
      habitat: "Aguas tropicales y subtropicales de todos los océanos",
      presa: "Plancton, pequeños peces y crustáceos",
      caracteristicas: "Cuerpo triangular con dos grandes aletas pectorales y dos pequeños cuernos cefálicos",
    },
    {
      nombre: "Raya Eléctrica",
      longitud: "80 cm",
      habitat: "Aguas poco profundas del Atlántico nororiental y el Mediterráneo",
      presa: "Pequeños peces y crustáceos",
      caracteristicas: "Cuerpo aplanado con dos grandes órganos eléctricos",
    },
    {
      nombre: "Raya Águila Moteada",
      longitud: "2 m",
      habitat: "Aguas tropicales y subtropicales de todos los océanos",
      presa: "Pequeños peces, moluscos y crustáceos",
      caracteristicas: "Cuerpo aplanado con cola larga y fina con aguijón venenoso",
    },
    {
      nombre: "Raya Mariposa",
      longitud: "2 m",
      habitat: "Aguas tropicales y subtropicales de todos los océanos",
      presa: "Pequeños peces, moluscos y crustáceos",
      caracteristicas: "Cuerpo aplanado con dos grandes aletas pectorales que forman una especie de 'mariposa'",
    },
    {
      nombre: "Raya Pintada",
      longitud: "1 m",
      habitat: "Aguas tropicales y subtropicales de todos los océanos",
      presa: "Pequeños peces, moluscos y crustáceos",
      caracteristicas: "Cuerpo aplanado con dos grandes aletas pectorales con manchas oscuras",
    },
    {
      nombre: "Raya Estrellada",
      longitud: "20 cm",
      habitat: "Aguas poco profundas del Atlántico nororiental y el Mediterráneo",
      presa: "Pequeños gusanos y crustáceos",
      caracteristicas: "Cuerpo aplanado con disco de forma estrellada",
    },
    {
      nombre: "Raya de Espina",
      longitud: "50 cm",
      habitat: "Aguas poco profundas del Pacífico nororiental",
      presa: "Pequeños peces y crustáceos",
      caracteristicas: "Cuerpo aplanado con cola larga y fina con aguijón venenoso",
    },
    {
      nombre: "Raya Moteada del Pacífico",
      longitud: "1 m",
      habitat: "Aguas profundas del Pacífico nororiental",
      presa: "Pequeños peces y crustáceos",
      caracteristicas: "Cuerpo aplanado con serie de espinas dorsales",
    },
    {
      nombre: "Raya Látigo",
      longitud: "1 m",
      habitat: "Aguas tropicales y subtropicales del Indo-Pacífico",
      presa: "Pequeños peces y crustáceos",
      caracteristicas: "Cuerpo aplanado con cola larga y fina con aguijón venenoso",
    },
  ];
  
  const tabla = document.createElement("table");
  tabla.classList.add("tabla-comparativa");
  
  const encabezado = document.createElement("tr");
  const tituloColumna = ["Especie", "Longitud", "Hábitat", "Alimentación", "Características"];
  tituloColumna.forEach((titulo) => {
    const celda = document.createElement("th");
    celda.textContent = titulo;
    encabezado.appendChild(celda);
  });
  tabla.appendChild(encabezado);
  
  rayas.forEach((raya) => {
    const fila = document.createElement("tr");
    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = raya.nombre;
    fila.appendChild(celdaNombre);
    const celdaLongitud = document.createElement("td");
    celdaLongitud.textContent = raya.longitud;
    fila.appendChild(celdaLongitud);
    const celdaHabitat = document.createElement("td");
    celdaHabitat.textContent = raya.habitat;
    fila.appendChild(celdaHabitat);
    const celdaPresa = document.createElement("td");
    celdaPresa.textContent = raya.presa;
    fila.appendChild(celdaPresa);
    const celdaCaracteristicas = document.createElement("td");
    celdaCaracteristicas.textContent = raya.caracteristicas;
    fila.appendChild(celdaCaracteristicas);
    tabla.appendChild(fila);
  });
  
  document.body.appendChild(tabla);
  