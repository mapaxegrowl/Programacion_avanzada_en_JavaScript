// Importar la función asíncrona obtenerDatosAnimales y la clase Animal
import { obtenerDatosAnimales } from "./acciones.js";
import { Leon, Lobo, Oso, Serpiente, Aguila } from "./animal.js";

// Función autoejecutable IIFE para manejar la lógica principal
(async () => {
  try {
    // Obtener datos de los animales
    const datos = await obtenerDatosAnimales();
    const imagenes = datos.imagenes;
    const sonidos = datos.sonidos;

    // Manejar el evento de registro de animal
    document.getElementById("btnRegistrar").addEventListener("click", () => {
      const nombre = document.getElementById("animal").value;
      const edad = document.getElementById("edad").value;
      const comentarios = document.getElementById("comentarios").value;

      if (!nombre || !edad || !comentarios) {
        alert("Ingresa todos los datos.");
        return;
      }

      // Crear instancia del animal correspondiente
      let animal;
      switch (nombre) {
        case "Leon":
          animal = new Leon(nombre, edad, imagenes.Leon, comentarios, sonidos.Leon);
          break;
        case "Lobo":
          animal = new Lobo(nombre, edad, imagenes.Lobo, comentarios, sonidos.Lobo);
          break;
        case "Oso":
          animal = new Oso(nombre, edad, imagenes.Oso, comentarios, sonidos.Oso);
          break;
        case "Serpiente":
          animal = new Serpiente(nombre, edad, imagenes.Serpiente, comentarios, sonidos.Serpiente);
          break;
        case "Aguila":
          animal = new Aguila(nombre, edad, imagenes.Aguila, comentarios, sonidos.Aguila);
          break;
        default:
          console.log("Animal no reconocido");
          return;
      }

      // Mostrar el animal en la tabla
      mostrarAnimalEnTabla(animal, datos); // Pasar los datos como argumento adicional

      // Devolver el formulario en un estado inicial luego de registrar a cada animal
      document.getElementById("animal").value = "";
      document.getElementById("edad").value = "";
      document.getElementById("comentarios").value = "";
    });
  } catch (error) {
    console.error("Hubo un problema al cargar los datos de los animales:", error);
  }
})();

// Función para mostrar un animal en la tabla del DOM
function mostrarAnimalEnTabla(animal, datos) { // Añadir datos como parámetro
  const tablaAnimales = document.getElementById("Animales");
  const nuevoAnimal = document.createElement("div");
  nuevoAnimal.classList.add("animal");
  nuevoAnimal.innerHTML = `
    <div class="card m-2" style="width: 18rem;">
      <img src="${animal.img}" class="card-img-top" alt="${animal.nombre}">
      <div class="card-body">
        <h5 class="card-title">${animal.nombre}</h5>
        <p class="card-text">${animal.comentarios}</p>
        <button class="btn btn-primary btnReproducirSonido">Reproducir sonido</button>
      </div>
    </div>
  `;
  tablaAnimales.appendChild(nuevoAnimal);

    // Actualizar la imagen en el elemento con el ID "preview"
    const previewImagen = document.getElementById("preview");
    previewImagen.innerHTML = ""; // Limpiar el contenido existente
    const imagenPreview = document.createElement("img");
    imagenPreview.src = animal.img;
    imagenPreview.alt = animal.nombre;
    previewImagen.appendChild(imagenPreview);

  // Obtener el botón de reproducir sonido dentro del nuevo animal
  const btnReproducirSonido = nuevoAnimal.querySelector(".btnReproducirSonido");
  btnReproducirSonido.addEventListener("click", () => {
    reproducirSonido(animal.nombre, datos); // Pasar los datos como argumento adicional
  });
}

// Función para reproducir el sonido del animal
function reproducirSonido(nombreAnimal, datos) { 
  // Obtener la ruta del sonido del animal
  const rutaSonido = datos.sonidos[nombreAnimal];
  if (!rutaSonido) {
    console.error("No se encontró la ruta del sonido para el animal:", nombreAnimal);
    return;
  }

  // Reproducir el sonido
  const player = document.getElementById("player");
  player.src = rutaSonido;
  player.play();
  

  
}
