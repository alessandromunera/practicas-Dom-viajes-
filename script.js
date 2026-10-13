
const data = [
  {
    title: "viaje 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut fermentum justo. Duis euismod massa non augue euismod ultricies.",
    url_img: "assets/viaje1.jpg"
  },
  {
    title: "viaje 2",
    description: "Mauris felis libero, suscipit sed pretium fermentum, aliquet a mauris. Nam justo mi, ultricies nec sem id, efficitur convallis arcu.",
    url_img: "assets/viaje2.jpg"
  },
  {
    title: "viaje 3",
    description: "Phasellus dignissim turpis id hendrerit mollis. Nulla iaculis tempor vehicula. Quisque lectus purus, auctor at ultrices ac.",
    url_img: "assets/viaje3.jpg"
  }
];

const cities = [
  "Burgos",
  "Madrid",
  "Barcelona",
  "Valencia",
  "Seville",
  "Bilbao",
  "Granada",
  "Malaga",
  "Palma de Mallorca",
  "Alicante",
  "Zaragoza"
];


const recomendados = document.getElementById("recomendados");

for (let i = 0; i < data.length; i++) {
  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  const img = document.createElement("img");
  img.src = data[i].url_img;

  const titulo = document.createElement("h3");
  titulo.textContent = data[i].title;

  const texto = document.createElement("p");
  texto.textContent = data[i].description;

  tarjeta.appendChild(img);
  tarjeta.appendChild(titulo);
  tarjeta.appendChild(texto);

  recomendados.appendChild(tarjeta);
}


const selector = document.getElementById("destinos");

for (let i = 0; i < cities.length; i++) {
  const option = document.createElement("option");
  option.textContent = cities[i];
  selector.appendChild(option);
}