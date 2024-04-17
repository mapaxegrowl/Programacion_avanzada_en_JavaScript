// Simulación de consulta asíncrona
export async function obtenerDatosAnimales() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const datos = {
        imagenes: {
          Leon: "assets/imgs/Leon.png",
          Lobo: "assets/imgs/Lobo.jpg",
          Oso: "assets/imgs/Oso.jpg",
          Serpiente: "assets/imgs/Serpiente.jpg",
          Aguila: "assets/imgs/Aguila.png",
        },
        sonidos: {
          Leon: "assets/sounds//Rugido.mp3",
          Lobo: "assets/sounds/Aullido.mp3",
          Oso: "assets/sounds/Grunido.mp3",
          Serpiente: "assets/sounds/Siseo.mp3",
          Aguila: "assets/sounds/Chillido.mp3",
        },
      };
      // Simular un error aleatorio
      const randomError = Math.random() > 0.5;
      if (randomError) {
        reject("Hubo un problema al cargar los datos de los animales.");
      } else {
        resolve(datos);
      }
    }, 2000);
  });
}
