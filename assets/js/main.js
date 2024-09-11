import { fetchingData, fetchingData2 } from "./api.js";

let rangoPrincipal = document.querySelector("#section-principal");
let rangoSecundario = document.querySelector("#section-secundary");
let rangoOtros = document.querySelector("#section-others");

let sectionPrincipal = document.querySelector("#personajes-principales");
let sectionSecundario = document.querySelector("#personajes-secundarios");
let sectionOtros = document.querySelector("#personajes-otros");

const personajes = await fetchingData();
const personajes2 = await fetchingData2();
const personajesFinal = [...personajes, ...personajes2];

const personajesPrincipales = [];
const personajesSecundarios = [];
const personajesOtros = [];

class Personaje {
  constructor(nombre, estatura, peso) {
    this.nombre = nombre;
    this.estatura = estatura;
    this.peso = peso;
  }
}

for (const [index, personaje] of personajesFinal.entries()) {
  if (index < 5) {
    const personajePrincipal = new Personaje(
      personaje.name,
      personaje.height,
      personaje.mass
    );
    personajesPrincipales.push(personajePrincipal);
  } else if (index > 4 && index < 10) {
    const personajeSecundario = new Personaje(
      personaje.name,
      personaje.height,
      personaje.mass
    );
    personajesSecundarios.push(personajeSecundario);
  } else if (index > 11 && index < 17) {
    const personajeOtro = new Personaje(
      personaje.name,
      personaje.height,
      personaje.mass
    );
    personajesOtros.push(personajeOtro);
  }
}

//Rango principal
rangoPrincipal.addEventListener("mouseover", () => {
  sectionPrincipal.innerHTML = "";
  sectionPrincipal.classList.remove("ocultar")

  personajesPrincipales.forEach((personaje) => {
    let tarjeta = document.createElement("div");
    let nombrePersonaje = document.createElement("h4");
    let infoPersonaje = document.createElement("div");
    tarjeta.classList.add("card", "m-3", "p-3", "shadow");
    tarjeta.style.width = "260px";

    nombrePersonaje.innerHTML = personaje.nombre;
    infoPersonaje.innerHTML = `Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}kg.`;

    tarjeta.append(nombrePersonaje);
    tarjeta.append(infoPersonaje);
    sectionPrincipal.append(tarjeta);
  });
});

rangoPrincipal.addEventListener("mouseout", () => {
  sectionPrincipal.classList.add("ocultar")
});

//Rango Secundario 
rangoSecundario.addEventListener("mouseover", () => {
  sectionSecundario.innerHTML = "";
  //sectionSecundario.style.visibility = "visible";
  sectionSecundario.classList.remove("ocultar")


  personajesSecundarios.forEach((personaje) => {
    let tarjeta = document.createElement("div");
    let nombrePersonaje = document.createElement("h4");
    let infoPersonaje = document.createElement("div");
    tarjeta.classList.add("card", "m-3", "p-3", "shadow");
    tarjeta.style.width = "260px";

    nombrePersonaje.innerHTML = personaje.nombre;
    infoPersonaje.innerHTML = `Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}kg.`;

    tarjeta.append(nombrePersonaje);
    tarjeta.append(infoPersonaje);
    sectionSecundario.append(tarjeta);
  });
});

rangoSecundario.addEventListener("mouseout", () => {
  sectionSecundario.classList.add("ocultar")
});

//Rango Otros
rangoOtros.addEventListener("mouseover", () => {
  sectionOtros.innerHTML = "";
  sectionOtros.style.visibility = "visible";

  personajesOtros.forEach((personaje) => {
    let tarjeta = document.createElement("div");
    let nombrePersonaje = document.createElement("h4");
    let infoPersonaje = document.createElement("div");
    tarjeta.classList.add("card", "m-3", "p-3", "shadow");
    tarjeta.style.width = "260px";

    nombrePersonaje.innerHTML = personaje.nombre;
    infoPersonaje.innerHTML = `Estatura: ${personaje.estatura}cm.  Peso: ${personaje.peso}kg.`;

    tarjeta.append(nombrePersonaje);
    tarjeta.append(infoPersonaje);
    sectionOtros.append(tarjeta);
  });
});

rangoOtros.addEventListener("mouseout", () => {
  sectionOtros.style.visibility = "hidden";
});